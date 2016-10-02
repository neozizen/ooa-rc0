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

@NgModule({
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
})
export class AppModule {}
