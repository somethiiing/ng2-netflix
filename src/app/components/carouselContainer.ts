import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel-container',
  template: `
    <div id="wrapper">

      <b class="fa fa-chevron-left fa-chevron-left-extra" aria-hidden="false"></b>

      <div class="module-section clearfix">
        <ul id="content">
          <h2>{{title}}</h2>
          <carousel-unit
            *ngFor="let unit of data"
            [data]="unit"
          ></carousel-unit>
        </ul>
      </div>

      <b class="fa fa-chevron-right fa-chevron-right-extra" aria-hidden="true"></b>

    </div>
  `,
  styleUrls: ['carouselContainer.css']
})

export class CarouselContainer {
  @Input() title = '';
  @Input() data = [];

}
