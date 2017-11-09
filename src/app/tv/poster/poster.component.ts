import { Show } from './../tv.models';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent implements OnChanges {
  @Input() show: Show;
  @Input() size = 'md';
  posterUrl: string;
  private placeholderUrl = 'http://powerpeople.club/wp-content/uploads/2014/02/default-placeholder-1024x1024-570x570.png';

  ngOnChanges() {
    const sizesDict = {
      md: 'medium',
      lg: 'original'
    };
    const sizeKey = sizesDict[this.size];

    this.posterUrl = get(this.show, ['image', sizeKey], this.placeholderUrl);
  }

}
