import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit{
    public moviesList: string [] = ['Hello', 'World', 'Angular'];     //access modifier (public) -> naziv varijable (moviesList) : tip varijable (string/array/number/boolean) = binding (lijevo od = deklaracija, a desno od = je inicijalizacija)
    
    constructor (private moviesService:MoviesService){}

    ngOnInit(){
        this.moviesService.getList().subscribe((odgovor:any) => {
            console.log(odgovor.description);
        })
    }
}