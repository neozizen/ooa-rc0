import { NavController } from 'ionic-angular';
import { SharedVariables } from '../../providers/shared-variables/shared-variables';
export declare class E3Page {
    private navCtrl;
    private nav;
    private sharedVariables;
    cpts: any;
    diag: string;
    private icd;
    private cpt;
    private surgicalmodifiers;
    private notes;
    constructor(navCtrl: NavController, nav: NavController, sharedVariables: SharedVariables);
    ionViewWillLeave(): void;
    return(): void;
}
