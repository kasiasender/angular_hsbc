import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'Me';
  @Output() timePassed = new EventEmitter<number>();

  constructor() {
    setInterval(() => this.timePassed.emit(+new Date()), 2000);
  }

  ngOnInit() {
  }

}
