import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /*  ion-item pencil icon function. 
      Please change individual function name for every pencil icon 
  */
  clickCM(){
    alert("Edit icon clicked..")
  }

  uploadCam(){
    alert("Functionality no implemented yet.")
  }

}
