import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TvmazeService
  ],
  declarations: [SearchComponent]
})
export class TvModule { }
