var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Request, Headers, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';
export var MailGun = (function () {
    function MailGun(http) {
        this.http = http;
        this.mailgunUrl = "sandbox3378469592ef4eadaf487686e7df38dc.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-8cfb39c81ceb0189820a770fa5434558");
    }
    // sendForm(...sendFormData) {
    MailGun.prototype.sendForm = function (patient, dob, physician, hospital, assist, dateofsurgery, inpatientadmit, erconsultcode, inpatientconsult, clinicalmodifiers, icd, cpt, surgicalmodifiers, notes) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=chit@hosting.com&to=" + "app.test@hcspaces.com" + "&subject=" + patient + "&text=PATIENT: " + patient + "&text=DATE OF BIRTH: " + dob + "&text=PHYSICIAN: " + physician + "&text=HOSPITAL: " + hospital + "&text=ASSISTED BY: " + assist + "&text=DATE OF SURGERY: " + dateofsurgery + "&text=IN-PATIENT ADMIT: " + inpatientadmit + "&text=ER CONSULT CODE: " + erconsultcode + "&text=IN-PATIENT CONSULT: " + inpatientconsult + "&text=CLINICAL MODIFIERS: " + clinicalmodifiers +
                "&text=ICD CODES: " + icd + "&text=CPT CODES: " + cpt + "&text=SURGICAL MODIFIERS" + surgicalmodifiers + "&text=NOTES: " + notes,
            headers: requestHeaders
        }))
            .subscribe(function (success) {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    MailGun = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], MailGun);
    return MailGun;
}());
