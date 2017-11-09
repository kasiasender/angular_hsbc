import { FormsModule } from '@angular/forms';
import { LoggedInGuard } from './logged-in.guard';
import { TvModule } from './tv/tv.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TvModule
  ],
  providers: [
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
