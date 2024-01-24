import 'jodit/esm/plugins/add-new-line/add-new-line.js';
import 'jodit/esm/plugins/bold/bold.js';
import 'jodit/esm/plugins/fullsize/fullsize.js';
import 'jodit/esm/plugins/indent/indent.js';
import 'jodit/esm/plugins/source/source.js';

import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Jodit } from 'jodit';
import de from 'jodit/esm/langs/de.js';
import { JoditConfig, NgxJoditComponent } from 'ngx-jodit';

Jodit.lang.de = de;

interface FormWithJoditEditor {
  editor: string;
}

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
      this.options = JSON.parse(value);
    } catch (e) {
      // ignore
    }
  }

  options: JoditConfig = {};

  constructor(private formBuilder: FormBuilder) {
  }
}
