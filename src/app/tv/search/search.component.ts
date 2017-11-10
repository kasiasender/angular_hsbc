import { Bookmark } from './../../bookmarks/bookmarks.models';
import { BookmarksService } from './../../bookmarks/bookmarks.service';
import { TvmazeService } from './../tvmaze.service';
import { Show, ShowResponse } from './../tv.models';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  // query = 'flash';
  searchForm: FormGroup;

  constructor(private tv: TvmazeService,
              private bs: BookmarksService,
              private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ['flash']
    });

    this.search(this.searchForm.controls.query.value);

    this.searchForm.controls.query.valueChanges
      .debounceTime(200)
      .subscribe(query => this.search(query));
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.seachShows(query)
      .subscribe(shows => this.shows = shows);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }

}
