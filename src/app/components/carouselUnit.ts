import { Component } from '@angular/core';

@Component({
  selector: 'carousel-unit',
  template: `
    <li class="card effect1">
      <div class="inside-top">
        <img src="http://placehold.it/350x150">
      </div>
    </li>
  `,
  styleUrls: ['./carouselUnit.css']
})

export class CarouselUnit { }
