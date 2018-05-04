import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StudycardNavComponent } from './studycard-nav/studycard-nav.component';
import { StudycardLoginComponent } from './studycard-login/studycard-login.component';
import { StudycardHomeComponent } from './studycard-home/studycard-home.component';

import { AngularFireModule } from "angularfire2";
import { AuthService } from './shared/auth.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";


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
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
