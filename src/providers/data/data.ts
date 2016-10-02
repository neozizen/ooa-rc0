import { Injectable } from '@angular/core';
//import { Storage, SqlStorage } from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  private storage;
//  private data;

  constructor() {
//    this.storage = new Storage(SqlStorage, {name:'form'})
  }

  getData() {
    return this.storage.get('forms');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('forms', newData);
  }

  remove(data){
    let newData = JSON.stringify(data);
    this.storage.remove('forms', newData);
  }

  clear(){
    this.storage.clear();
  }

}
