import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import * as $ from 'jquery'
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public db : AngularFireDatabase, public toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  ngOnInit(){
    var winh = $(window).height();
    var navh = $(".tabs-md .tab-button ").innerHeight();
  
    $(".header-content").height(winh - (navh + navh) );
  
    }

    send(title,mesg){


      this.toast.create({
        message:"تم ارسال الاشعار للجميع",
        duration:3000,
        "cssClass":"setdire"
      }).present();

      $("input,textarea").val("");


    }

}
