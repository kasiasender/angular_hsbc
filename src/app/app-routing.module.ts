import { ShowDetailsComponent } from './tv/show-details/show-details.component';
import { SearchComponent } from './tv/search/search.component';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export interface ShowDetailsParams {
  id: number;
}

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tv', component: SearchComponent},
  {path: 'tv/:id', component: ShowDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
