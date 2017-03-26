import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }

  pushAbout(){
      // this is a comment
      this.navCtrl.push(AboutPage, {
        name: "Mike"
      });
    }

}
