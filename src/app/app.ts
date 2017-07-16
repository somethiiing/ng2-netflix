import { Component, OnInit } from '@angular/core';
import { Api } from './services';

@Component({
  selector: 'app-root',
  template: `
    <div class="site">
      <div class="titleBox">
        <h1 class="title">Ng2 - NetFlax</h1>
      </div>
      <carousel-container
        *ngFor="let key of dataKeys"
        [title]="key"
        [data]="data[key]"
      ></carousel-container>
    </div>
  `,
  styles: [`
    .title {
      text-align: center;
    }
  `],
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'app';
  dataKeys = [];
  data = {};

  constructor( private api: Api) { }

  ngOnInit() {
    this.api.getApiData('/discover/tv', '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .subscribe(data => {
        this.data = data;
        this.dataKeys = Object.keys(data);
      });
  }
}


      // <carousel-container
      //   [title]="'Comedy'"
      //   [data]="data.comedy"
      // ></carousel-container>
