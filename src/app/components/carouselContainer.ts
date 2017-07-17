import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-container',
  template: `
    <div id="wrapper">

      <b
        class="fa fa-chevron-left fa-chevron-left-extra"
        aria-hidden="false"
        (click)="showMore('left')"
      ></b>

      <div class="module-section clearfix">
        <ul id="content">
          <h2>{{title}}</h2>
          <div class="carouselContent">
            <div *ngFor="let unit of data; let i = index;">
              <carousel-unit
                *ngIf="i >= low && i <= high"
                [data]="unit"
              ></carousel-unit>
            </div>
          </div>
        </ul>
      </div>

      <b
        class="fa fa-chevron-right fa-chevron-right-extra"
        aria-hidden="true"
        (click)="showMore('right')"
      ></b>

    </div>
  `,
  styleUrls: ['carouselContainer.css']
})

export class CarouselContainer implements OnInit {
  @Input() title = '';
  @Input() data = [];
  mid = 0;
  low = 0;
  high = 0;

  ngOnInit() {
    this.mid = Math.abs(this.data.length / 2);
    this.low = this.mid - 2;
    this.high = this.mid + 2;
  }

  showMore(direction) {
    if (direction === 'left' && !(this.low - 2 <= 0)) {
      this.low = this.low - 2;
      this.high = this.high - 2;
    }
    if (direction === 'right' && !(this.high + 2 >= this.data.length)) {
      this.low = this.low + 2;
      this.high = this.high + 2;
    }
  }

}
