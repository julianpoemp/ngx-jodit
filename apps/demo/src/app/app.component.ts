import 'jodit/esm/plugins/add-new-line/add-new-line.js';
import 'jodit/esm/plugins/bold/bold.js';
import 'jodit/esm/plugins/fullsize/fullsize.js';
import 'jodit/esm/plugins/indent/indent.js';
import 'jodit/esm/plugins/source/source.js';
import 'jodit/esm/plugins/resizer/resizer.js';

import {Component, ViewChild} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Jodit} from 'jodit';
import de from 'jodit/esm/langs/de.js';
import {JoditConfig, NgxJoditComponent} from 'ngx-jodit';

Jodit.lang.de = de;

interface FormWithJoditEditor {
  editor: string;
}

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgxJoditComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  value = 'Some text';
  formGroup = this.formBuilder.group<FormWithJoditEditor>({
    editor: 'Some text in a reactive form'
  });
  _optionsStr = '';

  @ViewChild('ngxJodit') ngxJodit?: NgxJoditComponent;

  get optionsStr(): string {
    return this._optionsStr;
  }

  set optionsStr(value: string) {
    this._optionsStr = value;
    try {
      const parsed = JSON.parse(value);
      this.options = {
        ...parsed,
        uploader: {
          insertImageAsBase64URI: true
        } as any
      }
    } catch (e) {
      // ignore
    }
  }

  options: JoditConfig = {
    uploader: {
      insertImageAsBase64URI: true
    } as any
  };

  constructor(private formBuilder: FormBuilder) {
  }
}
