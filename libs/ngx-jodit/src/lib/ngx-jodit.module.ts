import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxJoditComponent } from './ngx-jodit/ngx-jodit.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxJoditComponent],
  exports: [
    NgxJoditComponent
  ]
})
export class NgxJoditModule {}
