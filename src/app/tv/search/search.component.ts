import { Bookmark } from './../../bookmarks/bookmarks.models';
import { BookmarksService } from './../../bookmarks/bookmarks.service';
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
  query = 'flash';

  constructor(private tv: TvmazeService,
    private bs: BookmarksService) {
    this.search(this.query);
  }

  ngOnInit() {
  }

  search(query: string) {
    this.tv.seachShows(query)
      .subscribe(shows => this.shows = shows);
  }

  saveBookmark(bookmark: Show) {
    this.bs.add(bookmark);
  }

  isBookmarked(bookmark: Show): boolean {
    return this.bs.has(bookmark.id);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }

}
