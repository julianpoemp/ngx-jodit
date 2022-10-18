import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NgxJoditModule} from '@jodit/ngx-jodit';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, NgxJoditModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
