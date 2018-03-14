import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../model.service';


import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-filipinas',
  templateUrl: './filipinas.component.html',
  styleUrls: ['./filipinas.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class FilipinasComponent implements OnInit {
  filipinas: any;
 model: any;
  coursesObservable: Observable<any[]>;
  constructor(private http: HttpClient,private filipinasService:ModelService , private db: AngularFireDatabase) { }

 
  ngOnInit() {
    this.coursesObservable = this.getFilipinas('/filipinas');
  }
  getFilipinas(listPath1): Observable<any[]> {
    return this.db.list(listPath1).valueChanges();
  }
}