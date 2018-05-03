import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { StudycardNavComponent } from './studycard-nav/studycard-nav.component';
import { StudycardLoginComponent } from './studycard-login/studycard-login.component';
import { StudycardHomeComponent } from './studycard-home/studycard-home.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';

const appRoutes: Routes = [
  { path: 'home', component: StudycardHomeComponent},
  { path: 'login', component: StudycardLoginComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    StudycardNavComponent,
    StudycardHomeComponent,    
    StudycardLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
          useHash: true }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
