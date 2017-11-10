import { Show, ShowDetails } from './../tv.models';
import { TvmazeService } from './../tvmaze.service';
import { ShowDetailsParams } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tm-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show: ShowDetails;

  constructor(private route: ActivatedRoute) {
    this.show = this.route.snapshot.data.show;
  }

  ngOnInit() {
  }

  get maxEpisodesNumber(): number {
    return this.show._embedded.episodes
      .some(({number}) => number > 99) ? 3 : 2;
  }
}
