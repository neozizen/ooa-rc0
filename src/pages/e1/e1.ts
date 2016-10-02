
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChitListPage } from '../chit-list/chit-list';
//import { Http, Request, Headers, RequestMethod } from "@angular/http";
import { MailGun } from "../../providers/mail-gun/mail-gun";
import { Data } from '../../providers/data/data';
import { SharedVariables } from '../../providers/shared-variables/shared-variables';

@Component({
  templateUrl: 'e1.html'
})

export class E1Page {
  public _tabsForm: string = "_tabsPatient";
  private _tabsForms = [];
// added for mailgun provider
  public _tabsPatient = "";
  public _tabsDob = "";
  public _tabsPhysician = "";
  public _tabsHospital = "";
  public _tabsAssist = "";
  public _tabsDateofsurgery = "";
  public _tabsInpatientadmit = "";
  public _tabsErconsultcode = "";
  public _tabsInpatientconsult = "";
  public _tabsClinicalmodifiers = "";
  public _tabsIcd = "";
  public _tabsCpt = "";
  public _tabsSurgicalmodifiers = "";
  public _tabsNotes = "";
  mailgunUrl: string;
  mailgunApiKey: string;

  constructor(public _tabsNavCtrl: NavController, public _tabsDataService: Data, public _tabsMailGun: MailGun, public _tabsNavParams: NavParams, public _tabsSharedVariables: SharedVariables) {
//why are we setting myDate here??  Is this needed?
    let myDate: string;
    myDate = new Date().toISOString();

// *****
// commenting out until we can get local storage working again.
// *****
    // this._tabsDataService.getData().then((forms) => {
    //     if(forms){
    //         this._tabsForms = JSON.parse(forms);
    //     }
    // });
  }


  ionViewAfterLeave(){
    this._tabsSharedVariables.setE1ChitVariables(this._tabsPatient, this._tabsDob, this._tabsPhysician, this._tabsHospital, this._tabsAssist, this._tabsDateofsurgery)
  }

  sendForm(){
    this._tabsSharedVariables.setE1ChitVariables(this._tabsPatient, this._tabsDob, this._tabsPhysician, this._tabsHospital, this._tabsAssist, this._tabsDateofsurgery);
    let sendFormData = this._tabsSharedVariables.getChitVariables();
    this._tabsMailGun.sendForm (sendFormData[0], sendFormData[1], sendFormData[2], sendFormData[3], sendFormData[4], sendFormData[5], sendFormData[6], sendFormData[7], sendFormData[8], sendFormData[9], sendFormData[10], sendFormData[11], sendFormData[12], sendFormData[13]);
  }

  saveForm(_tabsForm){
    let newForm = {
      patient: this._tabsPatient,
      dob: this._tabsDob,
      physician: this._tabsPhysician,
      hospital: this._tabsHospital,
      assist: this._tabsAssist,
      dateofsurgery: this._tabsDateofsurgery,
      inpatientadmit: this._tabsInpatientadmit,
      erconsultcode: this._tabsErconsultcode,
      inpatientconsult: this._tabsInpatientconsult,
      surgicalmodifiers: this._tabsSurgicalmodifiers,
      icd: this._tabsIcd,
      cpt: this._tabsCpt,
      clinicalmodifiers: this._tabsClinicalmodifiers,
      notes: this._tabsNotes
    };
    //not sure what this does... seems like only the second fucntion call shold be needed, no???
    this._tabsForms.push(newForm);
    this._tabsDataService.save(this._tabsForms);
    //return to the Chit-List page in our app.
    this._tabsNavCtrl.pop(ChitListPage);
  }

  return(){
    this._tabsNavCtrl.pop(ChitListPage);
  }

}
