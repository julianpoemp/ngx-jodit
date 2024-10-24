import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxJoditProComponent} from 'ngx-jodit-pro';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxJoditProComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
