import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tm';
  menu: MenuItem[] = [
    {path: '/', label: 'Home', exact: true},
    {path: '/tv', label: 'TV Shows'},
    {path: '/contact', label: 'Contact'}
  ];

  handleClick(event: MouseEvent) {
    this.title = this.title + event.clientX;
  }
}
