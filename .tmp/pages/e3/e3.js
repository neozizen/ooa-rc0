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
import { ChitListPage } from '../chit-list/chit-list';
import { SharedVariables } from '../../providers/shared-variables/shared-variables';
//
// finish new code from jeff g.
//
// import { MyPopOverPage } from './e3a/e3a';
export var E3Page = (function () {
    function E3Page(navCtrl, nav, sharedVariables) {
        // Todd's original constructor...
        // constructor(private navCtrl: NavController, private nav: NavController)
        // {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.sharedVariables = sharedVariables;
        this.diag = "cpt";
        //
        // added by jeff g. 9/29 to test passing variables to new service -- remove so Todd can hae oppertunity to learn
        //
        this.icd = "";
        this.cpt = "";
        this.surgicalmodifiers = "";
        this.notes = "";
        //
        // finish new code from jeff g.
        //
        this.cpts = [
            '2315-ORIF clavicle',
            '23615-ORIF proximal humeral fracture',
            '24515-ORIF humeral shaft fracture',
            '24545-ORIF supracondylar humerus fracture',
            '25515-ORIF radial shaft fracture',
            '25545-ORIF ulna shaft fracture',
            '25575-ORIF radius and ulna shaft fracture',
            '25606-Percutaneous Fixation Distal Radius Fracture',
            '25607-ORIF extra articular distal radius fracture',
            '25608-ORIF 2 part distal radius fracture',
            '25609-ORIF three-part distal radius fracture',
            '27130-Total hip arthroplasty',
            '27235-Percutaneous screws femoral neck fracture',
            '27236-Endoprosthesis for femoral neck fracture',
            '27244-ORIF intertrochanteric hip fracture with DHS',
            '27245-IMR for intertrochanteric hip fracture',
            '27266-Closed reduction total hip arthroplasty',
            '27506-ORIF femoral shaft fracture with IMR',
            '27507-ORIF femoral shaft with plate and screws',
            '27511-ORIF supracondylar femur fracture w/o joint involvement',
            '27513-ORIF supracondylar femur with joint involvement',
            '27524-ORIF patella fracture',
            '27535-ORIF tibial plateau fracture unicondylar',
            '27536-ORIF tibial plateau fracture bicondylar fx',
            '27758-ORIF tibial shaft with plate and screws',
            '27759-ORIF tibial shaft with IMR',
            '27766-ORIF medial malleolus fracture',
            '27769-ORIF posterior malleolus fracture',
            '27792-ORIF distal fibula fracture',
            '27814-ORIF bimalleolar ankle fracture',
            '27822-ORIF trimalleolar fracture without posterior fixation',
            '27823-ORIF Trimalleolar fracture with posterior fixation',
            '27827-ORIF Pilon fracture tibia only',
            '27826-ORIF Pilon fracture fibula only',
            '27828-ORIF tibia and fibula with Pilon variant',
            '27829-ORIF ankle syndesmosis',
        ];
    }
    //
    // added by jeff g. 9/29 to test passing variables to new service -- remove so Todd can hae oppertunity to learn
    //
    E3Page.prototype.ionViewWillLeave = function () {
        this.sharedVariables.setE3ChitVariables(this.icd, this.cpt, this.surgicalmodifiers, this.notes);
    };
    E3Page.prototype.return = function () {
        this.nav.setRoot(ChitListPage);
    };
    E3Page = __decorate([
        Component({
            templateUrl: 'e3.html',
        }), 
        __metadata('design:paramtypes', [NavController, NavController, SharedVariables])
    ], E3Page);
    return E3Page;
}());
