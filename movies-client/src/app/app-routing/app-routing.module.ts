import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { TheatreComponent } from '../theatre/theatre.component';
import { TvShowsComponent } from '../tv-shows/tv-shows.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
