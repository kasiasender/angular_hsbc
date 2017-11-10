import { Bookmark } from './bookmarks.models';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { BookmarksService } from './bookmarks.service';

@Directive({
  selector: '[tmIsBookmarked]'
})
export class IsBookmarkedDirective {
  @Input('tmIsBookmarked') item: Bookmark;  // tslint:disable-line:no-input-rename

  @HostBinding('class.opaque')
  isOpaque = false;

  constructor(private bs: BookmarksService) {
  }

  @HostBinding('class.bookmarked')
  get isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

  @HostListener('click', ['$event.target'])
  toggleOpaque(target: HTMLElement) {
    if (target.nodeName === 'IMG') {
      this.isOpaque = !this.isOpaque;
    }
  }

}
