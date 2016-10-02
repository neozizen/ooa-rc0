var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ChitListPage } from '../pages/chit-list/chit-list';
import { E1Page } from '../pages/e1/e1';
import { E2Page } from '../pages/e2/e2';
import { E3Page } from '../pages/e3/e3';
import { MailGun } from '../providers/mail-gun/mail-gun';
import { SharedVariables } from '../providers/shared-variables/shared-variables';
import { Data } from '../providers/data/data';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                TabsPage,
                ChitListPage,
                E1Page,
                E2Page,
                E3Page
            ],
            imports: [
                IonicModule.forRoot(MyApp, { mode: "md" })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                TabsPage,
                ChitListPage,
                E1Page,
                E2Page,
                E3Page
            ],
            providers: [
                MailGun,
                SharedVariables,
                Data
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
