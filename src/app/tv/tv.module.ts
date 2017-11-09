import { ShowDetailsResolver } from './show-details/show-details.resolver';
import { RouterModule } from '@angular/router';
import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PosterComponent } from './poster/poster.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BookmarksModule
  ],
  providers: [
    TvmazeService,
    ShowDetailsResolver
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent]
})
export class TvModule { }
