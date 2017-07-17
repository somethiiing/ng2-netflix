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
        *ngFor="let key of dataKeys; let i = index"
        [title]="key"
        [data]="data[key]"
        [style.z-index]="100 - i"
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

  private shuffle(array) {
    let currentIndex = array.length
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  ngOnInit() {
    this.api.getApiData('/discover/tv', '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .subscribe(data => {
        this.data = data;
        this.dataKeys = Object.keys(data);
        this.dataKeys.forEach( elem => { this.data[elem] = this.shuffle(this.data[elem]) })
      });
  }
}
