import { Injectable } from '@angular/core';
import { Http, Request, Headers, RequestMethod } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MailGun {
  public patient: ""
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;

  constructor(http: Http) {
    this.http = http;
    this.mailgunUrl = "sandbox3378469592ef4eadaf487686e7df38dc.mailgun.org";
    this.mailgunApiKey = window.btoa("api:key-8cfb39c81ceb0189820a770fa5434558");
  }

// sendForm(...sendFormData) {

  sendForm(patient: string, dob: string, physician: string, hospital: string, assist: string, dateofsurgery: string, inpatientadmit: string, erconsultcode: string, inpatientconsult: string, clinicalmodifiers: string, icd: string, cpt: string, surgicalmodifiers: string, notes: string) {
    var requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    this.http.request(new Request({
        method: RequestMethod.Post,
        url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
        body: "from=chit@hosting.com&to=" + "app.test@hcspaces.com" + "&subject=" + patient + "&text=PATIENT: " + patient + "&text=DATE OF BIRTH: " + dob + "&text=PHYSICIAN: " + physician + "&text=HOSPITAL: "  + hospital + "&text=ASSISTED BY: " + assist + "&text=DATE OF SURGERY: " + dateofsurgery + "&text=IN-PATIENT ADMIT: " + inpatientadmit + "&text=ER CONSULT CODE: " + erconsultcode + "&text=IN-PATIENT CONSULT: " + inpatientconsult + "&text=CLINICAL MODIFIERS: " + clinicalmodifiers +
        "&text=ICD CODES: " + icd  + "&text=CPT CODES: " + cpt + "&text=SURGICAL MODIFIERS" + surgicalmodifiers + "&text=NOTES: " + notes,
        headers: requestHeaders
    }))

    .subscribe(success => {
        console.log("SUCCESS -> " + JSON.stringify(success));
    }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
    });
  }
}
