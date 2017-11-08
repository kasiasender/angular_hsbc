import { Http } from '@angular/http';
import { Show, ShowResponse } from './tv.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TvmazeService {
  private readonly baseUrl = 'https://api.tvmaze.com/';

  constructor(private http: Http) { }

  seachShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}search/shows?q=${query}`;
    return this.http.get(url)
      .map(resp => resp.json() as ShowResponse[])
      .map(showsResponse => showsResponse.map(({show}) => show));
  }

}
