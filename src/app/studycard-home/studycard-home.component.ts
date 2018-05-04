import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";

import { Card } from '../domain/card';
import { Category } from '../domain/category';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-studycard-home',
  templateUrl: './studycard-home.component.html',
  styleUrls: ['./studycard-home.component.css']
})
export class StudycardHomeComponent implements OnInit {

  private cardsCollection:AngularFirestoreCollection<Card>;
  private categoriesCollection: AngularFirestoreCollection<Category>;
  
  myCategoryId: string;
  categories: Observable<Category[]>;

  displayedColumns = ['question', 'answer', 'source', 'repetition', 'stage', 'modifiedDate'];
  dataSource = new MatTableDataSource<Card>();


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _auth: AuthService
    , private afs: AngularFirestore) {
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true };
    firestore.settings(settings);
  }

  ngOnInit() {
    this._auth.user.subscribe((user: firebase.User) => {
      if (user) {
        this.categoriesCollection = this.afs.collection<Category>(`users/${user.uid}/categories`);
        this.categories = this.categoriesCollection.valueChanges();
      }
    })
  }

  onSelectCategory() {
    alert(this.myCategoryId);

    this.cardsCollection = this.categoriesCollection
      .doc(this.myCategoryId)
      .collection('cardDeck');
    this.cardsCollection.valueChanges().forEach((doc: Card[]) => {
      // this.dataSource = new MatTableDataSource<Card>(doc);
      this.dataSource.data = doc;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
