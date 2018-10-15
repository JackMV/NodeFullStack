import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login (username: string, password: string): Observable<string>{
    console.log('inside login');
    return this.http.post('http://localhost:3000/api/login', {username, password}, {responseType: 'text', withCredentials: true});
  }

  register (user: User): Observable<User> {
    console.log('inside register');
    return this.http.post<User>('http://localhost:3000/api/register', user);
  }

  constructor(private http: HttpClient) { }
}
