import { NavController, AlertController } from 'ionic-angular';
import { Platform, Nav } from 'ionic-angular';
export declare class E2Page {
    private platform;
    navCtrl: NavController;
    alertCtrl: AlertController;
    nav: Nav;
    private e2aRoot;
    private e2bRoot;
    private e2cRoot;
    pages: Array<{
        title: string;
        component: any;
    }>;
    constructor(platform: Platform, navCtrl: NavController, alertCtrl: AlertController);
    home(): void;
    initializeApp(): void;
    showConfirm(): void;
}
