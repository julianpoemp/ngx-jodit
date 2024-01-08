import {Component, ViewChild} from '@angular/core';
import {NgxJoditComponent} from 'ngx-jodit';
import {Config} from 'jodit/esm/config';
import 'jodit/esm/plugins/bold/bold.js';
import 'jodit/esm/plugins/add-new-line/add-new-line.js';
import 'jodit/esm/plugins/fullsize/fullsize.js';
import de from 'jodit/esm/langs/de.js';
import {Jodit} from 'jodit';

Jodit.lang.de = de;

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'Some text';
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

  options: Partial<Config> = {};

  constructor() {
  }
}
