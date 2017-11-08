import { Show, ShowResponse } from './../tv.models';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];

  constructor(http: Http) {
    const url = 'https://api.tvmaze.com/search/shows?q=flash';
    http.get(url)
      .map(resp => resp.json() as ShowResponse[])
      .map(showsResponse => showsResponse.map(({show}) => show))
      .subscribe(albumsResponse => this.shows = albumsResponse);
  }

  ngOnInit() {
  }

}
