import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path: "default-layout", component: DefaultLayoutComponent },
  {path: "movies", component: MoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
