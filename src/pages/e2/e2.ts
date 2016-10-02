// import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {E2aPage} from './e2a/e2a'
import {E2bPage} from './e2b/e2b'
import {E2cPage} from './e2c/e2c'
import {Component, ViewChild} from '@angular/core';
import {Platform,Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
//import {E1Page} from "../e1/e1";
//import {E3Page} from "../e3/e3";
import {ChitListPage} from "../chit-list/chit-list";



@Component({
  templateUrl: 'e2.html',
})
export class E2Page {
  @ViewChild(Nav) nav: Nav;
  private e2aRoot: any;
  private e2bRoot: any;
  private e2cRoot: any;

  // this tells the tabs component which Pages
 // should be each tab's root Page , public router: Router
 pages: Array<{title: string, component: any}>;
 // constructor(private platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public local: SqlStorage)
 constructor(private platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController)
 // constructor(private platform: Platform, public router: Router)
 {
  //  this.local = new Storage(SqlStorage);
  //  this.local.set('admitModifiers', JSON.stringify('admitModifiers'));
  //  this.local.set('erModifiers', JSON.stringify('erModifiers'));
  //  this.local.set('consultModifiers', JSON.stringify('consultModifiers'));
   this.e2aRoot = E2aPage;
   this.e2bRoot = E2bPage;
   this.e2cRoot = E2cPage;
   platform.ready().then(() =>
   {
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
home(){
this.navCtrl.push(ChitListPage);
this.navCtrl.setRoot(ChitListPage);
 }

 initializeApp()
 {
   this.platform.ready().then(() =>
   {
     // Okay, so the platform is ready and our plugins are available.
     // Here you can do any higher level native things you might need.
     StatusBar.styleDefault();
   });
 }
 showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to exit?',
      message: 'If you choose confirm, your data will not be saved and you will be taken to the Home page.',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.navCtrl.push(ChitListPage);
            this.navCtrl.setRoot(ChitListPage);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel Clicked');
          }
        }
      ]
    });
    confirm.present();
  }
 }




// sets entire app mode to material design - eric holland
// ionicBootstrap(MyApp, null, {
//   mode: "md",
//   // statusbarPadding: true
// });

// ionicBootstrap(MyApp, null, {
//   statusbarPadding: true
// });
