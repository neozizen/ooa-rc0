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
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Data } from '../../providers/data/data';
export var ChitListPage = (function () {
    function ChitListPage(_chitlistDataService, _chitlistNavCtrl) {
        this._chitlistDataService = _chitlistDataService;
        this._chitlistNavCtrl = _chitlistNavCtrl;
        this._chitlistForms = [];
    }
    ChitListPage.prototype.ionViewWillEnter = function () {
        //      console.log("i'm here, are you?");
        // *****
        // commenting out until we can get local storage working again.
        // *****
        //   this._chitlistDataService.getData().then((forms) => {
        //       if(forms){
        //           this._chitlistForms = JSON.parse(forms);
        //       }
        // });
    };
    ChitListPage.prototype.startApp = function () {
        //console.log("i'm here 2");
        this._chitlistNavCtrl.push(TabsPage);
    };
    ChitListPage.prototype.editForm = function (_chitlistForm) {
        // debugger;
        // this.navCtrl.push(ChitListPage, {
        //   form: form
        // });
    };
    ChitListPage.prototype.removeForm = function (_chitlistForm) {
        // this is currently a 'NUKE THEM ALL' only option... this is because we need to create code for a unique key for the key:value pair...
        //      of the e1 saveForm method.  We could write that but Eric and I talked and think we should move on to Pouchdb w/Firebase ...
        //      instead of wasting time on something we are not going to use.
        this._chitlistForms = _chitlistForm;
        this._chitlistDataService.remove(this._chitlistForms);
    };
    ChitListPage = __decorate([
        Component({
            templateUrl: 'chit-list.html',
        }), 
        __metadata('design:paramtypes', [Data, NavController])
    ], ChitListPage);
    return ChitListPage;
}());
