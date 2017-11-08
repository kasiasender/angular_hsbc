import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    TvmazeService
  ],
  declarations: [SearchComponent]
})
export class TvModule { }
