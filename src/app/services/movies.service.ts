import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieListResponse } from "../components/movies/movie.types";


@Injectable({
    providedIn: 'root'
})

export class MoviesService {
    private _baseApiUrl: string = 'https://api.themoviedb.org/3/'
    private _apiKey: string = '6b9dbe6a2b9004651d9f522effa9c959'
    private _movieListEndpoint: string = 'movie/top_rated'

    constructor(private http: HttpClient) { }

    getList(): Observable<MovieListResponse> {
        //'https://api.themoviedb.org/3/movie/top_rated?api_key=6b9dbe6a2b9004651d9f522effa9c959'
        const requestURL = `${this._baseApiUrl}${this._movieListEndpoint}`
        const queryParams = new HttpParams()
            .set('api_key', this._apiKey)
            .set('page', 2)
        return this.http.get<MovieListResponse>(requestURL, { params: queryParams })
    }

}


