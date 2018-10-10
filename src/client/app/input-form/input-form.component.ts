import { Component, OnInit } from '@angular/core';

import { InputFormService } from '../services/input-form.service';
import { User } from '../user';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor(private inputFormService: InputFormService) { }

  user: User = {};

  storeUser() {
    console.log(this.user);
    this.inputFormService.storeUser(this.user).subscribe(
        user => {
            console.log('Successfully saved user ' + user.id + ' to database');
        }
    );
  }

  searchId: number;
  searchUserById() {
    this.inputFormService.searchUserById(this.searchId).subscribe(
      user => {
        console.log(user);
      }
    );
  }

  ngOnInit() {
  }

}
