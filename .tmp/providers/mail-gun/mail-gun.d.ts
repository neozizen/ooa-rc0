import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
export declare class MailGun {
    patient: "";
    http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;
    constructor(http: Http);
    sendForm(patient: string, dob: string, physician: string, hospital: string, assist: string, dateofsurgery: string, inpatientadmit: string, erconsultcode: string, inpatientconsult: string, clinicalmodifiers: string, icd: string, cpt: string, surgicalmodifiers: string, notes: string): void;
}
