import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path: "", component: DefaultLayoutComponent },
  {path: "movies", component: MoviesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
