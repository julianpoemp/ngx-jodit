import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NgxJoditProModule} from 'ngx-jodit-pro';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJoditProModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
