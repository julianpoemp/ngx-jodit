import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Jodit } from 'jodit';

@Component({
  selector: 'ngx-jodit',
  templateUrl: './ngx-jodit.component.html',
  styleUrls: ['./ngx-jodit.component.scss'],
})
export class NgxJoditComponent implements OnInit, AfterViewInit {
  @ViewChild('joditContainer') joditContainer!: ElementRef;
  jodit?: Jodit;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.joditContainer) {
      this.jodit = Jodit.make(this.joditContainer.nativeElement, {});
    }
  }
}
