import { Injectable } from '@angular/core';
import { ShowDetailsParams } from './../../app-routing.module';
import { TvmazeService } from './../tvmaze.service';
import { Show, ShowDetails } from './../tv.models';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowDetailsResolver implements Resolve<ShowDetails> {
  constructor(private tv: TvmazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShowDetails> {
    const {id} = route.params as ShowDetailsParams;
    return this.tv.getShow(id);
  }
}
