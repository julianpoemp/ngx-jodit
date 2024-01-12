import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxJoditComponent} from 'ngx-jodit';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJoditComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
