import {Component, ViewChild} from '@angular/core';
import {JoditProConfig} from 'ngx-jodit-pro';
import {NgxJoditComponent} from 'ngx-jodit';
import {FormBuilder} from '@angular/forms';

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
    editor: 'Some text in a reactive form',
  });
  _optionsStr = '';

  @ViewChild('ngxJodit') ngxJodit?: NgxJoditComponent;

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

  options: JoditProConfig = {};

  constructor(private formBuilder: FormBuilder) {
  }
}
