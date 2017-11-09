import { Show } from './../tv.models';
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
  show: Show;

  constructor(private route: ActivatedRoute) {
    this.show = this.route.snapshot.data.show;
  }

  ngOnInit() {
  }

}
