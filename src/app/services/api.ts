import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Api {

  tmdb_api_key: string = '037e1ef528d041a22be4bb907e3efced';
  tmdb_api_url: string = 'https://api.themoviedb.org/3'


  constructor(private http: Http) { }

  private getJson(arr) {
    return arr.map( elem => {
      return elem.json();
    });
  }

  private normalizeData (arr) {
    return {
      'Comedy': arr[0].results,
      'Crime': arr[1].results,
      'Drama': arr[2].results,
      'Sci-Fi': arr[3].results
    }
  }

  getApiData(path: string, options?: string): Observable<any> {

    const contentType = ['35', '80', '18', '10765']; // comedy: 35, crime: 80, drama: 18, scifi: 10765
    let urls = [];
    const url = `${this.tmdb_api_url}${path}?api_key=${this.tmdb_api_key}${options}&with_genres=`
    // return this.http.get(url + 35)
    contentType.forEach( id => {
      urls.push(this.http.get(url + id))
    })
    return Observable.forkJoin(urls)
      .map(this.getJson)
      .map(this.normalizeData)
      .do(data => console.log(data))
  }

}

