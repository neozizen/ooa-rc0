import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'chit-list.html',
})

export class ChitListPage {
  public _chitlistPatient;
  public _chitlistDob;
  public _chitlistPhysician;
  public _chitlistHospital;
  public _chitlistAssist;
  public _chitlistDateofsurgery;
  public _chitlistForms = [];

  ionViewWillEnter() {
//      console.log("i'm here, are you?");

// *****
// commenting out until we can get local storage working again.
// *****
    //   this._chitlistDataService.getData().then((forms) => {
    //       if(forms){
    //           this._chitlistForms = JSON.parse(forms);
    //       }
    // });
  }

  constructor(public _chitlistDataService: Data, public _chitlistNavCtrl: NavController){}

  startApp() {
    //console.log("i'm here 2");
    this._chitlistNavCtrl.push(TabsPage);

  }

  editForm(_chitlistForm){
    // debugger;
    // this.navCtrl.push(ChitListPage, {
    //   form: form
    // });
  }

  removeForm(_chitlistForm){
    // this is currently a 'NUKE THEM ALL' only option... this is because we need to create code for a unique key for the key:value pair...
    //      of the e1 saveForm method.  We could write that but Eric and I talked and think we should move on to Pouchdb w/Firebase ...
    //      instead of wasting time on something we are not going to use.
    this._chitlistForms = _chitlistForm;
    this._chitlistDataService.remove(this._chitlistForms);
  }

}
