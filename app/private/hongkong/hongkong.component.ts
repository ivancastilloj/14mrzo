import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../model.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-hongkong',
  templateUrl: './hongkong.component.html',
  styleUrls: ['./hongkong.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class HongkongComponent implements OnInit {
  hongkong: any;
 model: any;
  coursesObservable: Observable<any[]>;
  constructor(private http: HttpClient,private hongkongService:ModelService , private db: AngularFireDatabase) { }

 
  ngOnInit() {
    this.coursesObservable = this.getHongkong('/hongkong');
  }
  getHongkong(listPath2): Observable<any[]> {
    return this.db.list(listPath2).valueChanges();
  }
}