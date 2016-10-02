var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavController, AlertController } from 'ionic-angular';
import { E2aPage } from './e2a/e2a';
import { E2bPage } from './e2b/e2b';
import { E2cPage } from './e2c/e2c';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ChitListPage } from "../chit-list/chit-list";
export var E2Page = (function () {
    // constructor(private platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public local: SqlStorage)
    function E2Page(platform, navCtrl, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        //  this.local = new Storage(SqlStorage);
        //  this.local.set('admitModifiers', JSON.stringify('admitModifiers'));
        //  this.local.set('erModifiers', JSON.stringify('erModifiers'));
        //  this.local.set('consultModifiers', JSON.stringify('consultModifiers'));
        this.e2aRoot = E2aPage;
        this.e2bRoot = E2bPage;
        this.e2cRoot = E2cPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
        this.initializeApp();
        // set our app's pages
        //  this.pages = [
        //    { title: 'Home', component: AppEntryPage },
        //    { title: 'E2', component: E2Page },
        //  ];
    }
    E2Page.prototype.home = function () {
        this.navCtrl.push(ChitListPage);
        this.navCtrl.setRoot(ChitListPage);
    };
    E2Page.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    };
    E2Page.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure you want to exit?',
            message: 'If you choose confirm, your data will not be saved and you will be taken to the Home page.',
            buttons: [
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.navCtrl.push(ChitListPage);
                        _this.navCtrl.setRoot(ChitListPage);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Cancel Clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        ViewChild(Nav), 
        __metadata('design:type', Nav)
    ], E2Page.prototype, "nav", void 0);
    E2Page = __decorate([
        Component({
            templateUrl: 'e2.html',
        }), 
        __metadata('design:paramtypes', [Platform, NavController, AlertController])
    ], E2Page);
    return E2Page;
}());
// sets entire app mode to material design - eric holland
// ionicBootstrap(MyApp, null, {
//   mode: "md",
//   // statusbarPadding: true
// });
// ionicBootstrap(MyApp, null, {
//   statusbarPadding: true
// });
