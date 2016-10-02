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
import { NavParams } from 'ionic-angular';
import { E1Page } from '../e1/e1';
import { E2Page } from '../e2/e2';
import { E3Page } from '../e3/e3';
export var TabsPage = (function () {
    function TabsPage(_tabsNavParams) {
        this._tabsNavParams = _tabsNavParams;
        this._tabsE1Root = E1Page;
        this._tabsE2Root = E2Page;
        this._tabsE3Root = E3Page;
        //    console.log("i'm here 3");
        //    this._tabsMySelectedIndex = _tabsNavParams.data.tabIndex || 0;
        this._tabsMySelectedIndex = 0;
        //    console.log("i'm here 4");
    }
    TabsPage = __decorate([
        Component({
            templateUrl: 'tabs.html'
        }), 
        __metadata('design:paramtypes', [NavParams])
    ], TabsPage);
    return TabsPage;
}());
