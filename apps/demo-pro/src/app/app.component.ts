import {Component} from '@angular/core';
import {Config} from 'jodit/esm/config';

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'Some text <b>in bold print</b>';
  _optionsStr: string = '';

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

  options: Partial<Config> = {};
}
