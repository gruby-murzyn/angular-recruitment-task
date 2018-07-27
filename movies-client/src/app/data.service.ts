import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  theatreUrl = '/theatre';
  moviesUrl = '/movies/';
  tvshowsUrl = '/shows';
  constructor(private http: HttpClient) { }
  // function to extract data from rensponse
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res;
    return body || {};
  }
  // Return all movies
  getMovies(): Observable<any> {
    return this.http.get(apiUrl + this.moviesUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  // Return movies in theaters
  getInTheaters(): Observable<any> {
    return this.http.get(apiUrl + this.theatreUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Return popula tv shows
  getPopularTVShows(): Observable<any> {
    return this.http.get(apiUrl + this.tvshowsUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  // Errors Handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
