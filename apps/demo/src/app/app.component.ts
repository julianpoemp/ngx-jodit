import {Component} from '@angular/core';
import {Config} from 'jodit/config';

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'Some text';
  _optionsStr = '';

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
}
