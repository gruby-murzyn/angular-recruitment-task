import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { TheatreComponent } from '../theatre/theatre.component';
import { TvShowsComponent } from '../tv-shows/tv-shows.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'theatre',
    component: TheatreComponent
  },
  {
    path: 'tvshows',
    component: TvShowsComponent
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
