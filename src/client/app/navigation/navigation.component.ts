import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { User } from '../user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(
      user => {
        console.log('recieved response');
        console.log(user);
      });
  }


  ngOnInit() {
  }

}
