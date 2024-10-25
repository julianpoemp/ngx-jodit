import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxJoditProModule} from 'ngx-jodit-pro';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJoditProModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
