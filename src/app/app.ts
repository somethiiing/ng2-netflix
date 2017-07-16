import { Component, OnInit } from '@angular/core';
import { Api } from './services';

@Component({
  selector: 'app-root',
  template: `
    <carousel-container></carousel-container>
  `,
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'app';

  constructor( private api: Api) { }

  ngOnInit() {
    this.api.getApiData('/discover/tv', '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .subscribe(data => console.log(data));
  }
}
