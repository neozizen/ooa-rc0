var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ChitListPage } from '../pages/chit-list/chit-list';
//import { Data } from '../providers/data/data';
//import { SharedVariables } from '../providers/shared-variables/shared-variables';
//import { MailGun } from "../providers/mail-gun/mail-gun";
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = ChitListPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Configuration', component: ChitListPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            //StatusBar.show();
            // let status bar overlay webview
            //StatusBar.overlaysWebView(true);
            // set status bar to white
            //StatusBar.backgroundColorByHexString('#213540');
            // StatusBar.styleBlackOpaque();
            // StatusBar.styleBlackTranslucent();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        ViewChild(Nav), 
        __metadata('design:type', Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.template.html'
        }), 
        __metadata('design:paramtypes', [Platform])
    ], MyApp);
    return MyApp;
}());
