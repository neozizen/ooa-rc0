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
export var SharedVariables = (function () {
    function SharedVariables() {
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
    SharedVariables.prototype.setE1ChitVariables = function (patient, dob, physician, hospital, assist, dateofsurgery) {
        this.patient = patient;
        this.dob = dob;
        this.physician = physician;
        this.hospital = hospital;
        this.assist = assist;
        this.dateofsurgery = dateofsurgery;
    };
    SharedVariables.prototype.setE2ChitVariables = function (inpatientadmit, erconsultcode, inpatientconsult, clinicalmodifiers) {
        this.inpatientadmit = inpatientadmit;
        this.erconsultcode = erconsultcode;
        this.inpatientconsult = inpatientconsult;
        this.clinicalmodifiers = clinicalmodifiers;
    };
    SharedVariables.prototype.setE3ChitVariables = function (icd, cpt, surgicalmodifiers, notes) {
        this.icd = icd;
        this.cpt = cpt;
        this.surgicalmodifiers = surgicalmodifiers;
        this.notes = notes;
    };
    SharedVariables.prototype.getChitVariables = function () {
        return [this.patient, this.dob, this.physician, this.hospital, this.assist, this.dateofsurgery, this.inpatientadmit, this.erconsultcode, this.inpatientconsult, this.clinicalmodifiers, this.icd, this.cpt, this.surgicalmodifiers, this.notes];
    };
    // shouldn't need anything below this line ... fix 'getChitVariables'!!!
    SharedVariables.prototype.getPatient = function () {
        return this.patient;
    };
    SharedVariables.prototype.getDOB = function () {
        return this.dob;
    };
    SharedVariables.prototype.getPhysician = function () {
        return this.physician;
    };
    SharedVariables.prototype.getHospital = function () {
        return this.hospital;
    };
    SharedVariables.prototype.getAssist = function () {
        return this.assist;
    };
    SharedVariables.prototype.getDateOfSurgery = function () {
        return this.dateofsurgery;
    };
    SharedVariables.prototype.getInPatientAdmit = function () {
        return this.inpatientadmit;
    };
    SharedVariables.prototype.getErConsultCode = function () {
        return this.erconsultcode;
    };
    SharedVariables.prototype.getInpatientConsult = function () {
        return this.inpatientconsult;
    };
    SharedVariables.prototype.getClinicalModifiers = function () {
        return this.clinicalmodifiers;
    };
    SharedVariables.prototype.getICD = function () {
        return this.icd;
    };
    SharedVariables.prototype.getCPT = function () {
        return this.cpt;
    };
    SharedVariables.prototype.getSurgicalModifiers = function () {
        return this.surgicalmodifiers;
    };
    SharedVariables.prototype.getNotes = function () {
        return this.notes;
    };
    SharedVariables = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], SharedVariables);
    return SharedVariables;
}());
