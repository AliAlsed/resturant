import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the MainmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }
  goto(url){
    this.navCtrl.push(HomePage, url);
  }
  logout(){
    this.navCtrl.setRoot(RegisterPage);
    this.navCtrl.goToRoot;
  }

}
