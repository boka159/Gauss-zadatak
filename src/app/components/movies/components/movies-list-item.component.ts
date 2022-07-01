import { Component, Input } from "@angular/core";
import { MovieListItem } from "../movie.types";
import { PrimeNGConfig } from 'primeng/api';
import { Router } from "@angular/router";

@Component({
    selector: 'movies-list-item',
    templateUrl: './movies-list-item.component.html',
    styleUrls: ['./movies-list-item.component.css']
})

export class MoviesListItemComponent {
    @Input('movieItemInput') movieItem: MovieListItem; //kad šaljemo podatke iz parent komponente u child komponentu

    constructor(private primengConfig: PrimeNGConfig, private router: Router) { }

    movieDetails(pageName: string): void {
        this.router.navigate([`${pageName}`]);
    }
}