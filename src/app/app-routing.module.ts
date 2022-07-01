import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/layout/default-layout.component';
import { MoviesListComponent } from './components/movies/movies-list.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: "", component: MoviesListComponent },
  { path: "movies", component: MoviesComponent },
  { path: "movies", component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
