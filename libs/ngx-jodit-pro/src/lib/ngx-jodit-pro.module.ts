import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxJoditProComponent} from './ngx-jodit-pro.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgxJoditProComponent],
  exports: [NgxJoditProComponent],
})
export class NgxJoditProModule {}
