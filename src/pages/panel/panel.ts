import { MainmenuPage } from './../mainmenu/mainmenu';
import { AddEntreesPage } from './../add-entrees/add-entrees';
import { AdddessertPage } from './../adddessert/adddessert';
import { AddfastJuicesPage } from './../addfast-juices/addfast-juices';
import { AddfastmealsPage } from './../addfastmeals/addfastmeals';
import { AddmainmenuPage } from './../addmainmenu/addmainmenu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AdminrequestPage } from '../adminrequest/adminrequest';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the PanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public auth : AngularFireAuth,
    public alert : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanelPage');
  }


  addfod(){
    this.navCtrl.push(AddfastmealsPage);
  }

  requests(){
    this.navCtrl.push(AddmainmenuPage);
  }

  fodmenu(){
    this.navCtrl.push(AddfastJuicesPage)
  }
  adddesert(){
    this.navCtrl.push(AdddessertPage);
  }
  addnutrition(){
    this.navCtrl.push(AddEntreesPage);

  }
  logout(){
    var alert = this.alert.create({
      subTitle:"هل تريد تسجيل الخروج",
      cssClass:"setdire",
      buttons:[
        {text:"خروج",handler : ()=> {
          this.auth.auth.signOut();
          this.navCtrl.setRoot(MainmenuPage);
          this.navCtrl.goToRoot;


        }}
      ,"الغاء"]
    });
    
    alert.present();

  }

}
AdminrequestPage