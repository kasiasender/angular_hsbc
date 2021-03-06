import { ShowDetailsResolver } from './show-details/show-details.resolver';
import { RouterModule } from '@angular/router';
import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PosterComponent } from './poster/poster.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EpisodizePipe } from './episodize.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BookmarksModule
  ],
  providers: [
    TvmazeService,
    ShowDetailsResolver
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodizePipe]
})
export class TvModule { }
