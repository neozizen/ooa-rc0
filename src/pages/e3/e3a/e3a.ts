import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'e3a.html',
})
export class E3aPage {

  constructor(private navCtrl: NavController) {

    this.cpts = [

      '2315-ORIF clavicle',
      '23615-ORIF proximal humeral fracture',
      '24515-ORIF humeral shaft fracture',
      '24545-ORIF supracondylar humerus fracture',
      '25515-ORIF radial shaft fracture',
      '25545-ORIF ulna shaft fracture',
      '25575-ORIF radius and ulna shaft fracture',
      '25606-Percutaneous Fixation Distal Radius Fracture',
      '25607-ORIF extra articular distal radius fracture',
      '25608-ORIF 2 part distal radius fracture',
      '25609-ORIF three-part distal radius fracture',
      '27130-Total hip arthroplasty',
      '27235-Percutaneous screws femoral neck fracture',
      '27236-Endoprosthesis for femoral neck fracture',
      '27244-ORIF intertrochanteric hip fracture with DHS',
      '27245-IMR for intertrochanteric hip fracture',
      '27266-Closed reduction total hip arthroplasty',
      '27506-ORIF femoral shaft fracture with IMR',
      '27507-ORIF femoral shaft with plate and screws',
      '27511-ORIF supracondylar femur fracture w/o joint involvement',
      '27513-ORIF supracondylar femur with joint involvement',
      '27524-ORIF patella fracture',
      '27535-ORIF tibial plateau fracture unicondylar',
      '27536-ORIF tibial plateau fracture bicondylar fx',
      '27758-ORIF tibial shaft with plate and screws',
      '27759-ORIF tibial shaft with IMR',
      '27766-ORIF medial malleolus fracture',
      '27769-ORIF posterior malleolus fracture',
      '27792-ORIF distal fibula fracture',
      '27814-ORIF bimalleolar ankle fracture',
      '27822-ORIF trimalleolar fracture without posterior fixation',
      '27823-ORIF Trimalleolar fracture with posterior fixation',
      '27827-ORIF Pilon fracture tibia only',
      '27826-ORIF Pilon fracture fibula only',
      '27828-ORIF tibia and fibula with Pilon variant',
      '27829-ORIF ankle syndesmosis',

         ];


  }

}
