import { Http } from '@angular/http';
import { Show, ShowResponse } from './tv.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TvmazeService {
  private readonly baseUrl = 'https://api.tvmaze.com/';

  constructor(private http: HttpClient) { }

  seachShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url)
      .map(showsResponse => showsResponse.map(({show}) => show));
  }

}
