import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BookmarksModule
  ],
  providers: [
    TvmazeService
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class TvModule { }
