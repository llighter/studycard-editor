import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Card } from '../domain/card';
import { Category } from '../domain/category';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-studycard-home',
  templateUrl: './studycard-home.component.html',
  styleUrls: ['./studycard-home.component.css']
})
export class StudycardHomeComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private cardsCollection: AngularFirestoreCollection<Card>;
  private categoriesCollection: AngularFirestoreCollection<Category>;

  myCategoryId: string;
  categories: Observable<Category[]>;

  displayedColumns = ['question', 'answer', 'source', 'repetition', 'stage', 'createdDate', 'modifiedDate'];
  dataSource = new MatTableDataSource<Card>();

  // TODO: const로 생성해야하나?
  tempSource: string;
  tempQuestion: string;
  tempAnswer: string;

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
    });
  }

  onSelectCategory() {
    alert(this.myCategoryId);

    this.cardsCollection = this.categoriesCollection
      .doc(this.myCategoryId)
      .collection('cardDeck');
    this.cardsCollection.valueChanges().forEach((doc: Card[]) => {
      this.dataSource.data = doc;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  insertCard() {
    const id = this.afs.createId();
    const card: Card = {
      cardID: id,
      question: this.tempQuestion,
      answer: this.tempAnswer,
      source: this.tempSource,
      repetition: 0,
      stage: 0,
      createdDate: new Date(),
      modifiedDate: new Date()
    };

    this.cardsCollection.doc(id).set(card).then(() => {
      console.log(`[+] New card inserted to Firestore..`);
      // initialize card variables
      this.tempAnswer = '';
      this.tempQuestion = '';
      this.tempSource = '';
    });
  }

}
