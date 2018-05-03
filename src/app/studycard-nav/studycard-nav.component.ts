import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-studycard-nav',
  templateUrl: './studycard-nav.component.html',
  styleUrls: ['./studycard-nav.component.css']
})
export class StudycardNavComponent implements OnInit {

  isLoggedin: boolean;
  userName: string = 'Not Logged In...';

  constructor(public _auth: AuthService) { }

  ngOnInit() {
    this._auth.user.subscribe((user: firebase.User) => {
      if(user) {
        this.userName = user.displayName;
        this.isLoggedin = true;
      } else {
        this.userName = 'Not Logged In';
      }
    });
  }

  logout() {
    alert("logout");
    this.isLoggedin = false;
    this._auth.logout();
  }

}
