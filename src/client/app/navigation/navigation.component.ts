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

  private user: User = {};

  login() {
    this.loginService.login(this.user).subscribe(
      user => {
        console.log(user);
      });
  }


  ngOnInit() {
  }

}
