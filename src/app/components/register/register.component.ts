import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';
import {User} from  '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {
  public user:User;


  constructor() {
    this.user = new User('', '', '', '', '', '', '','ROLE_USER', null);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.user);
  }

}
