import {environment} from 'environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { of } from 'rxjs';
import {inject} from '@angular/core';


export class ApiClass {

  public url = environment.url;
  public isProduction = environment.production;
  public http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  error(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} `;
    }
    return of( {error: true, msg: errorMessage, data: null} );
  }

}
