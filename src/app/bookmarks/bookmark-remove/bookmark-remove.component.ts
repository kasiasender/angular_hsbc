import { Bookmark } from './../bookmarks.models';
import { BookmarksService } from './../bookmarks.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.css'],
})
export class BookmarkRemoveComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) { }

  remove() {
    this.bs.remove(this.item.id);
  }

  has(): boolean {
    return this.bs.has(this.item.id);
  }
}
