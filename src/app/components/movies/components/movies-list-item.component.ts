import { Component, Input } from "@angular/core";
import { MovieListItem } from "../movie.types";

@Component({
    selector: 'movies-list-item',
    templateUrl: './movies-list-item.component.html',
    styleUrls: ['./movies-list-item.component.css']
})

export class MoviesListItemComponent {
    @Input('movieItemInput') movieItem: MovieListItem; //kad šaljemo podatke iz parent komponente u child komponentu
    // @Input('movieCoverPhotoInput') movieCoverPhoto: MovieListItem;
}