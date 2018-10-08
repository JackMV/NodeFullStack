import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {

  storeUser (user: User): Observable<User> {
    console.log('inside storeUser');
    return this.http.post<User>('http://localhost:3000/api/storeUser', user);
  }

  searchUserById(userId: number): Observable<User> {
    console.log('inside searchUser');
    return this.http.get<User>('http://localhost:3000/api/user/' + userId);
  }


  constructor(private http: HttpClient) { }
}
