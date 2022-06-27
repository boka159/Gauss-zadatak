import { ThisReceiver } from "@angular/compiler";
import { convertUpdateArguments } from "@angular/compiler/src/compiler_util/expression_converter";
import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { MovieListResponse, MovieListItem } from "./movie.types";


@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
    public moviesList: MovieListItem[] = [];     //access modifier (public) -> naziv varijable (moviesList) : tip varijable (string/array/number/boolean) = binding (lijevo od = deklaracija, a desno od = je inicijalizacija) 
    // public currentPage: MovieListResponse["page"] = 1;
    public currentPage: number = 1;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.moviesService.getList(this.currentPage).subscribe((response: MovieListResponse) => {
            this.moviesList = response.results; //uzmi varijablu this.moviesList i postavi joj vrijednost iz response.results
            this.currentPage = response.page;
        })
        console.log(this.moviesList);
        // this.moviesService.getList().subscribe(this.movieListResponseCallback)
    }

    // movieListResponseCallback = (response: MovieListResponse) => {
    //     this.moviesList = response.results;

    //     console.log(this)
    // }
    onBack() {
        this.moviesService.getList(this.currentPage).subscribe((response: MovieListResponse) => {
            this.currentPage = this.currentPage - 1;
        })
    }

    onNext() {
        this.moviesService.getList(this.currentPage).subscribe((response: MovieListResponse) => {
            this.currentPage = this.currentPage + 1;
        })

    }

}