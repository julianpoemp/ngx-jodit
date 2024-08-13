import {CommonModule} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Jodit} from 'jodit';
import {BehaviorSubject, combineLatest, delay, distinctUntilChanged, filter, Subscription, withLatestFrom} from 'rxjs';

import {JoditConfig} from './types';

@Component({
  selector: 'ngx-jodit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngx-jodit.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxJoditComponent),
    multi: true
  }],
  styleUrls: ['./ngx-jodit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxJoditComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('joditContainer') joditContainer!: ElementRef;
  jodit?: Jodit;

  /**
   * options for jodit.
   * You can add more supported options even Typescript doesn't suggest the options.
   */
  private _options?: JoditConfig = {};
  @Input() set options(value: JoditConfig) {
    this._options = value;

    if (value) {
      this.initJoditContainer();
    }
  }

  // value property (subject)
  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input() set value(value: string) {
    const sanitizedText = this.prepareText(value);
    if (!this.internValueChange) {
      this.valueSubject.next(sanitizedText);
    } else {
      this.internValueChange = false;
    }
    this.onChange(sanitizedText);
  }

  get value(): string {
    return this.valueSubject.getValue();
  }

  @Output() valueChange = new EventEmitter<string>();

  //events
  @Output() joditChange = new EventEmitter<string>();
  @Output() joditKeyDown = new EventEmitter<KeyboardEvent>();
  @Output() joditKeyUp = new EventEmitter<KeyboardEvent>();
  @Output() joditMousedown = new EventEmitter<MouseEvent>();
  @Output() joditMouseup = new EventEmitter<MouseEvent>();
  @Output() joditClick = new EventEmitter<PointerEvent>();
  @Output() joditFocus = new EventEmitter<FocusEvent>();
  @Output() joditPaste = new EventEmitter<ClipboardEvent>();
  @Output() joditResize = new EventEmitter<void>();
  @Output() joditBeforeEnter = new EventEmitter<KeyboardEvent>();
  @Output() joditBeforeCommand = new EventEmitter<string>();
  @Output() joditAfterExec = new EventEmitter<void>();
  @Output() joditAfterPaste = new EventEmitter<ClipboardEvent>();
  @Output() joditChangeSelection = new EventEmitter<void>();

  // Used for delay value assignment to wait for jodit to be initialized
  private joditInitializedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private valueSubscription?: Subscription;
  private internValueChange = false;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {
    this.valueSubscription = combineLatest([
      // Handle value changes ...
      this.valueSubject.asObservable().pipe(distinctUntilChanged()),
      // ...additionally ensuring that the value is reapplied if the editor was not initialized when value was set
      this.joditInitializedSubject.pipe(distinctUntilChanged(), filter(initialized => initialized))
    ]).pipe(
      // Pass through the latest value in case of editor initialization
      withLatestFrom(this.valueSubject),
      // Prevent ExpressionChangedAfterItHasBeenCheckedError
      delay(0)
    ).subscribe(([[_, initialized], text]) => {
      if (this.jodit && initialized) {
        this.jodit.value = text;
      }
    });
  }

  isHTML(text: string) {
    const elem = document.createElement('div');
    elem.innerHTML = text;

    return (
      text &&
      elem.childNodes.length > 0 &&
      elem.childNodes.item(0).nodeType !== 3
    );
  }

  ngAfterViewInit() {
    this.initJoditContainer();
  }

  ngOnDestroy() {
    this.valueSubscription?.unsubscribe();
    this.jodit?.events.destruct();
  }

  initJoditContainer() {
    if (this.joditContainer) {
      if (this.jodit) {
        this.jodit.destruct();
        this.joditInitializedSubject.next(false);
      }
      this.jodit = Jodit.make(this.joditContainer.nativeElement, this._options);
      this.jodit.value = this.valueSubject.getValue();
      this.jodit.events.on('change', (text: string) => {
        this.internValueChange = true;
        this.changeValue(text);
        this.joditChange.emit(text);
        this.onChange(text);
      });
      this.jodit.events.on('keydown', (a: KeyboardEvent) => {
        this.joditKeyDown.emit(a);
      });
      this.jodit.events.on('keyup', (a: KeyboardEvent) => {
        this.joditKeyUp.emit(a);
      });
      this.jodit.events.on('mousedown', (a: MouseEvent) => {
        this.joditMousedown.emit(a);
      });
      this.jodit.events.on('mouseup', (a: MouseEvent) => {
        this.joditMouseup.emit(a);
      });
      this.jodit.events.on('click', (a: PointerEvent) => {
        this.joditClick.emit(a);
        this.onTouched();
      });
      this.jodit.events.on('focus', (a: FocusEvent) => {
        this.joditFocus.emit(a);
      });
      this.jodit.events.on('paste', (a: ClipboardEvent) => {
        this.joditPaste.emit(a);
      });
      this.jodit.events.on('resize', () => {
        this.joditResize.emit();
      });
      this.jodit.events.on('beforeEnter', (a: KeyboardEvent) => {
        this.joditBeforeEnter.emit(a);
      });
      this.jodit.events.on('beforeCommand', (a: string) => {
        this.joditBeforeCommand.emit(a);
      });
      this.jodit.events.on('afterExec', () => {
        this.joditAfterExec.emit();
      });
      this.jodit.events.on('afterPaste', (a: ClipboardEvent) => {
        this.joditAfterPaste.emit(a);
      });
      this.jodit.events.on('changeSelection', () => {
        this.joditChangeSelection.emit();
      });

      this.joditInitializedSubject.next(true);
    }
  }

  changeValue(value: string) {
    this.valueChange.emit(value);
  }

  /*
  FUNCTIONS RELEVANT FOR ANGULAR FORMS
   */

  onChange = (text: string) => {
    // implemented by user
  };

  onTouched = () => {
    // implemented by user
  };

  writeValue(text: string): void {
    this.valueSubject.next(this.prepareText(text));
  }

  registerOnChange(fn: (text: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.options = {
      ...this._options,
      disabled: isDisabled
    };
  }

  private prepareText(text: string) {
    return this.isHTML(text) ? text : `<p>${text}</p>`;
  }
}
