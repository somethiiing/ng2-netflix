import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-unit',
  template: `
    <li 
      class="card"
      [style.background-image]="'url(http://image.tmdb.org/t/p/w185/' + data.backdrop_path + ')'"
    >
      <div
        class="effect"
        [style.background-image]="'url(http://image.tmdb.org/t/p/w185/' + data.backdrop_path + ')'"
      >
        <div
          class="inside-top"
          (mouseover)="toggleDetails(true)"
          (mouseleave)="toggleDetails(false)"
        >
          <h2 class="cardText"> {{data.name}} </h2>
          <div *ngIf="displayDetails">
            <p>Popularity: {{data.popularity}}</p>
            <p>Overview: {{data.overview}}</p>
            <b class="fa fa-chevron-down" aria-hidden="false" ></b>
          </div>
        </div>
      </div>
    </li>
  `,
  styleUrls: ['./carouselUnit.css']
})

export class CarouselUnit implements OnInit {
  @Input() data = {
    name: '',
    popularity: '',
    overview: '',
    backdrop_path: ''
  };
  displayDetails = false;

  toggleDetails(bool) {
    this.displayDetails = bool;
  }

  ngOnInit() {
    if (this.data.overview.split(' ').length > 30) {
      this.data.overview = this.data.overview.split(' ').slice(0, 30).join(' ');
      this.data.overview = this.data.overview + '...';
    }
  }

 }
