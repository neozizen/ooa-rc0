import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { ChitListPage } from '../pages/chit-list/chit-list';
//import { Data } from '../providers/data/data';
//import { SharedVariables } from '../providers/shared-variables/shared-variables';
//import { MailGun } from "../providers/mail-gun/mail-gun";


@Component({
  templateUrl: 'app.template.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChitListPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Configuration', component: ChitListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
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
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
