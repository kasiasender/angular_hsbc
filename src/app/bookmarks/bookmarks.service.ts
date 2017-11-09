import { Bookmark, BookmarkId } from './bookmarks.models';
import { Injectable } from '@angular/core';

@Injectable()
export class BookmarksService {
  private items: Bookmark[] = [];

  constructor() { }

  getAll(): Bookmark[] {
    return [...this.items];
  }

  add(item: Bookmark): void {
    this.items.push(item);
  }

  remove(id: BookmarkId): void {
    this.items = this.items.filter(item => item.id !== id);
    // remove(this.items, {id})
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
