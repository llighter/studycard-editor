import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-studycard-login',
  templateUrl: './studycard-login.component.html',
  styleUrls: ['./studycard-login.component.css']
})
export class StudycardLoginComponent implements OnInit {

  constructor(private _auth: AuthService
    , private router: Router) { }

  ngOnInit() {
    this._auth.user.subscribe((user: firebase.User) => {
      if(user) {
        this.router.navigate(['/home']);
        alert(user.displayName);
      }
    })
  }

  login() {
    this._auth.login();
  }

}
