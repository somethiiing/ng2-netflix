import { Component } from '@angular/core';

@Component({
  selector: 'carousel-container',
  template: `
    <div id="wrapper">

      <span id="controlL" class="left-controls" role="button" aria-label="See Previous Modules">
        <b class="fa fa-chevron-left fa-chevron-left-extra" aria-hidden="false"></b>
      </span>

      <div class="title text-center h1">Module Selection Area</div>

      <div class="module-section clearfix">
        <ul id="content">
          <carousel-unit
            *ngFor="let unit of data"
          ></carousel-unit>
        </ul>
      </div>

      <span id="controlR" class="right-controls" role="button" aria-label="See Previous Modules">
        <b class="fa fa-chevron-right fa-chevron-right-extra" aria-hidden="true"></b>
      </span>

    </div>
  `,
  styleUrls: ['carouselContainer.css']
})

export class CarouselContainer {
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  
}
