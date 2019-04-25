import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//injectables
@Injectable()
export class MovieProvider {
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  //getting data from the wed
  //api key inserted in code
  getFilmInfo(title:string):Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=121c2657&s='+title);
  }

}
