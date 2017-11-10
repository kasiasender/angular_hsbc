import { version } from '../environments/environment';
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

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
  loading = false;
  version = version;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.loading = true;
      } else if (e instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

  handleClick(event: MouseEvent) {
    this.title = this.title + event.clientX;
  }
}
