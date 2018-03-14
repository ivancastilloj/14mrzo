
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';



import { QueryFn } from 'angularfire2/database/interfaces';
import { NewyorkComponent } from './private/newyork/newyork.component';
import { FilipinasComponent } from './private/filipinas/filipinas.component';
import { HongkongComponent } from './private/hongkong/hongkong.component';
 
@Injectable()
export class ModelService { 
 
  private dbPath = '/newyork';
  private dbPath1 = '/filipinas';
  private dbPath2 = '/hongkong';
  newyorkRef: AngularFireList<NewyorkComponent> = null;
  filipinasRef: AngularFireList<FilipinasComponent> = null;
  hongkongRef: AngularFireList<HongkongComponent> = null;
  constructor(private db: AngularFireDatabase) {
    this.newyorkRef = db.list(this.dbPath);
    this.filipinasRef = db.list(this.dbPath1);
    this.hongkongRef = db.list(this.dbPath2);
  }
 
  
 
  getNewYork(): AngularFireList<NewyorkComponent> {
    return this.newyorkRef;
  }
 
  getFilipinas(): AngularFireList<FilipinasComponent> {
    return this.filipinasRef;
  }
  getHongKong(): AngularFireList<HongkongComponent> {
    return this.hongkongRef;
  }
 
  private handleError(error) {
    console.log(error);
  }
}