import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { E1Page } from '../e1/e1';
import { E2Page } from '../e2/e2';
import { E3Page } from '../e3/e3';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage
{
  public _tabsE1Root: any = E1Page;
  public _tabsE2Root: any = E2Page;
  public _tabsE3Root: any = E3Page;
  public _tabsMySelectedIndex: number;
  constructor(public _tabsNavParams: NavParams) {
//    console.log("i'm here 3");
//    this._tabsMySelectedIndex = _tabsNavParams.data.tabIndex || 0;
    this._tabsMySelectedIndex = 0;
//    console.log("i'm here 4");
  }
}
