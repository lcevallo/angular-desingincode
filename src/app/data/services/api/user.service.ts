import { Injectable } from '@angular/core';
import {ApiClass} from '@data/schema/api-class';
import {Observable} from 'rxjs';
import {IcardUser} from '@components/cards/card-user/icard-user.metadata';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass{

  /**
   * Get all user from api
   */
  getAllUsers(): Observable<{
      error: boolean,
      msg: string,
      data: IcardUser[]
    }> {
      const response = {error: false, msg: '', data: null};
      return this.http.get<IcardUser[]>(this.url + 'users')
              .pipe(
                    map(r => {
                              response.data = r;
                              return response;
                            }
                        ),
                    catchError(this.error)
                );
     }

     /**
      * Get one user by Id
      */
     getUserById(id: number): Observable<
     {
      error: boolean,
      msg: string,
      data: IcardUser
    }> {
      const response = {error: false, msg: '', data: null};
        return this.http.get<IcardUser>(this.url + 'users/' + id)
        .pipe(
          map(r => {
                    response.data = r;
                    return response;
                  }
              ),
          catchError(this.error)
      );

    }
}
