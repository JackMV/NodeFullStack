import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {

  storeUser (user: User): Observable<User> {
      return this.http.post<User>('localhost:8000/storeUser', user);
  }


  constructor(private http: HttpClient) { }
}
