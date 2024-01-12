import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxJoditModule} from 'ngx-jodit';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJoditModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
