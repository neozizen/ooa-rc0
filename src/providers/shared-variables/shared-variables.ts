import { Injectable } from '@angular/core';

@Injectable()
export class SharedVariables {

    patient: string;
    dob: string;
    physician: string;
    hospital: string;
    assist: string;
    dateofsurgery: string;
    inpatientadmit: string;
    erconsultcode: string;
    inpatientconsult: string;
    clinicalmodifiers: string;
    icd: string;
    cpt: string;
    surgicalmodifiers: string;
    notes: string;

    constructor() {
      this.patient = "no value entered";
      this.dob = "no value entered";
      this.physician = "no value entered";
      this.hospital = "no value entered";
      this.assist = "no value entered";
      this.dateofsurgery = "no value entered";
      this.inpatientadmit = "no value entered";
      this.erconsultcode = "no value entered";
      this.inpatientconsult = "no value entered";
      this.clinicalmodifiers = "no value entered";
      this.icd = "no value entered";
      this.cpt = "no value entered";
      this.surgicalmodifiers = "no value entered";
      this.notes = "no value entered";
    }


    setE1ChitVariables(patient, dob, physician, hospital, assist, dateofsurgery) {
      this.patient = patient;
      this.dob = dob;
      this.physician = physician;
      this.hospital = hospital;
      this.assist = assist;
      this.dateofsurgery = dateofsurgery;
    }

    setE2ChitVariables(inpatientadmit, erconsultcode, inpatientconsult, clinicalmodifiers) {
      this.inpatientadmit = inpatientadmit;
      this.erconsultcode = erconsultcode;
      this.inpatientconsult = inpatientconsult;
      this.clinicalmodifiers = clinicalmodifiers;
    }

    setE3ChitVariables(icd, cpt, surgicalmodifiers, notes) {
      this.icd = icd;
      this.cpt = cpt;
      this.surgicalmodifiers = surgicalmodifiers;
      this.notes = notes;
    }


    getChitVariables() {
      return [this.patient, this.dob, this.physician, this.hospital, this.assist, this.dateofsurgery, this.inpatientadmit, this.erconsultcode, this.inpatientconsult, this.clinicalmodifiers, this.icd, this.cpt, this.surgicalmodifiers, this.notes]
    }

// shouldn't need anything below this line ... fix 'getChitVariables'!!!
  getPatient(){
    return this.patient
  }

  getDOB(){
    return this.dob
  }

  getPhysician(){
    return this.physician
  }

  getHospital(){
    return this.hospital
  }

  getAssist(){
    return this.assist
  }

  getDateOfSurgery(){
    return this.dateofsurgery
  }

  getInPatientAdmit(){
    return this.inpatientadmit
  }

  getErConsultCode(){
    return this.erconsultcode
  }

  getInpatientConsult(){
    return this.inpatientconsult
  }

  getClinicalModifiers(){
    return this.clinicalmodifiers
  }

  getICD(){
    return this.icd
  }

  getCPT(){
    return this.cpt
  }

  getSurgicalModifiers(){
    return this.surgicalmodifiers
  }

  getNotes(){
    return this.notes
  }

}
