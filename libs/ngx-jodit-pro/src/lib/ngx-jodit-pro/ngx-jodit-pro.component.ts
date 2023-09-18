import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {Config} from 'jodit/esm/config';
import {Jodit} from 'jodit';

@Component({
  selector: 'ngx-jodit-pro',
  templateUrl: './ngx-jodit-pro.component.html',
  styleUrls: ['./ngx-jodit-pro.component.scss'],
})
export class NgxJoditProComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('joditContainer') joditContainer!: ElementRef;
  jodit?: any;

  /**
   * options for jodit pro. It's of type partial because Config is imported from jodit packge and doesn't contain jodit-pro options.
   * You can add more supported options even Typescript doesn't suggest the options.
   */
  @Input() options?: Partial<Config>;

  // value property
  _value = '';
  @Input() set value(value: string) {
    this._value = value;
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      // options changed
      const options = changes['options'].currentValue;

      if (options) {
        this.initJoditContainer();
      }
    }

    if(changes["value"]){
      this._value = changes["value"].currentValue;
      if(this.jodit){
        this.jodit.value = this._value;
      }
    }
  }

  ngAfterViewInit() {
    this.initJoditContainer();
  }

  initJoditContainer() {
    if (this.joditContainer) {
      if (this.jodit) {
        this.jodit.destruct();
      }
      this.joditContainer.nativeElement.innerHTML = this._value;
      this.jodit = Jodit.make(this.joditContainer.nativeElement, this.options);
      this.jodit.events.on('change', (text: string) => {
        this.joditChange.emit(text);
        this.changeValue(text);
      });
      this.jodit.events.on('keydown', (a: KeyboardEvent) => {
        this.joditKeyDown.emit(a);
      });
      this.jodit.events.on('mousedown', (a: MouseEvent) => {
        this.joditMousedown.emit(a);
      });
      this.jodit.events.on('click', (a: PointerEvent) => {
        this.joditClick.emit(a);
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
    }
  }

  changeValue(value: string) {
    this._value = value;
    this.valueChange.emit(value);
  }

  ngOnDestroy() {
    this.jodit?.events.destruct();
  }
}
