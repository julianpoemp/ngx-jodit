import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NgxJoditProComponent} from 'ngx-jodit-pro';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJoditProComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
