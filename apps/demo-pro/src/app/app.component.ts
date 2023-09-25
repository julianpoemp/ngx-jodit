import {Component, ViewChild} from '@angular/core';
import {Config} from 'jodit/types/config';
import {timer} from 'rxjs';
import {NgxJoditProComponent} from 'ngx-jodit-pro';

@Component({
  selector: 'jodit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'Some text <b>in bold print</b>';
  @ViewChild('jodit') jodit!: NgxJoditProComponent;

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

  constructor() {
    timer(3000).subscribe(() => {
      this.value = 'Some text <b>in bold print ok klappt</b>'
    })
  }
  options: Partial<Config> = {};
}
