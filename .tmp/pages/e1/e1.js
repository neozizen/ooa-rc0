var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChitListPage } from '../chit-list/chit-list';
import { MailGun } from "../../providers/mail-gun/mail-gun";
import { Data } from '../../providers/data/data';
import { SharedVariables } from '../../providers/shared-variables/shared-variables';
export var E1Page = (function () {
    function E1Page(_tabsNavCtrl, _tabsDataService, _tabsMailGun, _tabsNavParams, _tabsSharedVariables) {
        this._tabsNavCtrl = _tabsNavCtrl;
        this._tabsDataService = _tabsDataService;
        this._tabsMailGun = _tabsMailGun;
        this._tabsNavParams = _tabsNavParams;
        this._tabsSharedVariables = _tabsSharedVariables;
        this._tabsForm = "_tabsPatient";
        this._tabsForms = [];
        // added for mailgun provider
        this._tabsPatient = "";
        this._tabsDob = "";
        this._tabsPhysician = "";
        this._tabsHospital = "";
        this._tabsAssist = "";
        this._tabsDateofsurgery = "";
        this._tabsInpatientadmit = "";
        this._tabsErconsultcode = "";
        this._tabsInpatientconsult = "";
        this._tabsClinicalmodifiers = "";
        this._tabsIcd = "";
        this._tabsCpt = "";
        this._tabsSurgicalmodifiers = "";
        this._tabsNotes = "";
        //why are we setting myDate here??  Is this needed?
        var myDate;
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
    E1Page.prototype.ionViewAfterLeave = function () {
        this._tabsSharedVariables.setE1ChitVariables(this._tabsPatient, this._tabsDob, this._tabsPhysician, this._tabsHospital, this._tabsAssist, this._tabsDateofsurgery);
    };
    E1Page.prototype.sendForm = function () {
        this._tabsSharedVariables.setE1ChitVariables(this._tabsPatient, this._tabsDob, this._tabsPhysician, this._tabsHospital, this._tabsAssist, this._tabsDateofsurgery);
        var sendFormData = this._tabsSharedVariables.getChitVariables();
        this._tabsMailGun.sendForm(sendFormData[0], sendFormData[1], sendFormData[2], sendFormData[3], sendFormData[4], sendFormData[5], sendFormData[6], sendFormData[7], sendFormData[8], sendFormData[9], sendFormData[10], sendFormData[11], sendFormData[12], sendFormData[13]);
    };
    E1Page.prototype.saveForm = function (_tabsForm) {
        var newForm = {
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
    };
    E1Page.prototype.return = function () {
        this._tabsNavCtrl.pop(ChitListPage);
    };
    E1Page = __decorate([
        Component({
            templateUrl: 'e1.html'
        }), 
        __metadata('design:paramtypes', [NavController, Data, MailGun, NavParams, SharedVariables])
    ], E1Page);
    return E1Page;
}());
