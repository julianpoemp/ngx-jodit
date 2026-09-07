import {Component, ViewChild} from '@angular/core';
import {JoditProConfig, NgxJoditProComponent} from 'ngx-jodit-pro';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

interface FormWithJoditEditor {
  editor: string;
}

declare const Jodit: any;

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FormsModule,
    NgxJoditProComponent,
    ReactiveFormsModule
  ]
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

  options: JoditProConfig = {
    tuneBlock: {
      popup: {
        p: Jodit.atom(['align', 'tune.up', 'tune.remove', 'tune.down'])
      }
    }
  };

  constructor(private formBuilder: FormBuilder) {
  }
}
