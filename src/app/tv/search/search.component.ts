import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(http: Http) {
    const url = 'https://api.tvmaze.com/search/shows?q=flash';
    http.get(url)
      .map(resp => resp.json())
      .subscribe(albumsResponse => console.log(albumsResponse));
  }

  ngOnInit() {
  }

}
