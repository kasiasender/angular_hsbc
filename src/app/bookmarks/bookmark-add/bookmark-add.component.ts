import { BookmarksService } from './../bookmarks.service';
import { Bookmark } from './../bookmarks.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.css']
})
export class BookmarkAddComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) { }

  save() {
    this.bs.add(this.item);
  }

  has(): boolean {
    return this.bs.has(this.item.id);
  }
}
