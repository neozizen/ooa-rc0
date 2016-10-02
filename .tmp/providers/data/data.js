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
import 'rxjs/add/operator/map';
export var Data = (function () {
    //  private data;
    function Data() {
        //    this.storage = new Storage(SqlStorage, {name:'form'})
    }
    Data.prototype.getData = function () {
        return this.storage.get('forms');
    };
    Data.prototype.save = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('forms', newData);
    };
    Data.prototype.remove = function (data) {
        var newData = JSON.stringify(data);
        this.storage.remove('forms', newData);
    };
    Data.prototype.clear = function () {
        this.storage.clear();
    };
    Data = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], Data);
    return Data;
}());
