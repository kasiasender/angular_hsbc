import { TvmazeService } from './../tvmaze.service';
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

  constructor(tv: TvmazeService) {
    tv.seachShows('flash')
      .subscribe(shows => this.shows = shows);
  }

  ngOnInit() {
  }

}
