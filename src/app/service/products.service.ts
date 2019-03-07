import { tap, catchError } from 'rxjs/operators';
import { IProduct } from './../products/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productUrl = '/repository/products.json';

  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  // shorthand
  // constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>(this.productUrl);
    // return this.http.get<IProduct[]>(this.productUrl).pipe(
    //   tap(data => console.log('Products : ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
