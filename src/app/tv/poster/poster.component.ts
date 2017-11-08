import { Show } from './../tv.models';
import { Component, OnInit, Input } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
  @Input() show: Show;
  @Input() size = 'md';
  posterUrl: string;
  private placeholderUrl = 'http://powerpeople.club/wp-content/uploads/2014/02/default-placeholder-1024x1024-570x570.png';

  constructor() {
  }

  ngOnInit() {
    const sizesDict = {
      md: 'medium',
      lg: 'original'
    };
    const sizeKey = sizesDict[this.size];

    this.posterUrl = get(this.show.image, [sizeKey], this.placeholderUrl);
  }

}
