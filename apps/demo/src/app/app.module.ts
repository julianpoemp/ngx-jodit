import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgxJoditComponent } from 'ngx-jodit';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, NgxJoditComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
