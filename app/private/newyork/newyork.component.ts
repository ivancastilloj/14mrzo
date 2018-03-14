import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewyorkComponent implements OnInit {

  newyork: any;
 model: any;
  coursesObservable: Observable<any[]>;
  constructor(private http: HttpClient,private newyorkService:ModelService , private db: AngularFireDatabase) { }

 
  ngOnInit() {
    this.coursesObservable = this.getNewyork('/newyork');
  }
  getNewyork(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}