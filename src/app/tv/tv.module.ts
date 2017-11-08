import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [SearchComponent]
})
export class TvModule { }
