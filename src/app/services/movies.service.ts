import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class MoviesService{
    private _apiUrl:string = 'https://api.themoviedb.org/3/list/142064?api_key=6b9dbe6a2b9004651d9f522effa9c959&language=en-US'

    constructor (private http: HttpClient){}

    getList ():Observable<any>{
        return this.http.get<any>(this._apiUrl)
    }

}


