import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
export declare class ChitListPage {
    _chitlistDataService: Data;
    _chitlistNavCtrl: NavController;
    _chitlistPatient: any;
    _chitlistDob: any;
    _chitlistPhysician: any;
    _chitlistHospital: any;
    _chitlistAssist: any;
    _chitlistDateofsurgery: any;
    _chitlistForms: any[];
    ionViewWillEnter(): void;
    constructor(_chitlistDataService: Data, _chitlistNavCtrl: NavController);
    startApp(): void;
    editForm(_chitlistForm: any): void;
    removeForm(_chitlistForm: any): void;
}
