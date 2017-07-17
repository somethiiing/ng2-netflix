import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel-unit',
  template: `
    <li class="card effect1">
      <div
        class="inside-top"
        (mouseover)="toggleDetails(true)"
        (mouseleave)="toggleDetails(false)"
      >
        <h3 class="cardText"> {{data.name}} </h3>
        <img class="backdrop" src="http://image.tmdb.org/t/p/w185/{{data.backdrop_path}}">
        <p *ngIf="displayDetails">Popularity: {{data.popularity}}</p>
        <p *ngIf="displayDetails">Overview: {{data.overview}}</p>
      </div>
    </li>
  `,
  styleUrls: ['./carouselUnit.css']
})

export class CarouselUnit {
  @Input() data = {
    name: '',
    popularity: '',
    overView: '',
    backdrop_path: ''
  };
  displayDetails = false;

  toggleDetails(bool) {
    this.displayDetails = bool;
  }

 }
