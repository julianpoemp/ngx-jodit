import 'jodit-pro/esm/plugins/tune-block/tune-block.js';
import 'jodit-pro/esm/plugins/page-break/page-break.js'

import {Component, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {JoditProOptions, NgxJoditProComponent} from 'ngx-jodit-pro';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Jodit} from 'jodit-pro';

interface FormWithJoditEditor {
  editor: string;
}

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, NgxJoditProComponent, ReactiveFormsModule],
})
export class AppComponent {
  value = 'Some text';
  formGroup = this.formBuilder.group<FormWithJoditEditor>({
    editor: 'Some text in a reactive form',
  });
  _optionsStr = '';

  @ViewChild('ngxJodit') ngxJodit?: NgxJoditProComponent;

  get optionsStr(): string {
    return this._optionsStr;
  }

  set optionsStr(value: string) {
    this._optionsStr = value ?? '';
    try {
      this.options = value !== '' ? JSON.parse(value) : undefined;
    } catch (e) {
      // ignore
    }
  }

  options: JoditProOptions = {
    tuneBlock: {
      popup: {
        p: Jodit.atom(['align', 'tune.up', 'tune.remove', 'tune.down']),
      },
    },
  };

  constructor(private formBuilder: FormBuilder) {}
}
