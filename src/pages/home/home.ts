import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { PanelPage } from '../panel/panel';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { RequistPage } from '../requist/requist';
import { RegisterPage } from '../register/register';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list : Observable<any>;
  admin = false;
  email;
  murl = "https";
  userid;

  constructor(public navCtrl: NavController, public auth : AngularFireAuth,
    public alert : AlertController,public db : AngularFireDatabase , public param:NavParams) {
      console.log(param.data);

      this.list = db.list(`${this.param.data}`).valueChanges();

      db.list("fods").valueChanges().subscribe(data => {
       
        $("page-home .waiteloading").hide();

        if(data[0] == undefined){
          $("page-home .notfoundheader").css("display","flex");
        }

        if(data[0] != undefined){
          $("page-home .notfoundheader").hide();
        }

      })

      auth.authState.subscribe(user => {
        if(user != undefined){
          if(user.email == "admin@admin.com"){
            this.admin = true
          }
        }
      })
     

  }


  ngOnInit(){
    var winh = $(window).height();
    var navh = $(".tabs-md .tab-button").innerHeight();
  
    $("page-home .waiteloading,page-home .notfoundheader").height(winh - (navh + navh) );
  
    }






  adminlogin(){
    this.auth.authState.subscribe(user => {

      if(user != undefined){
      if(user.email == "admin@admin.com"){
       this.navCtrl.push(PanelPage);
      }
    }

    });
  }

  logout(){
    var alert = this.alert.create({
      subTitle:"هل تريد تسجيل الخروج",
      cssClass:"setdire",
      buttons:[
        {text:"خروج",handler : ()=> {
          this.auth.auth.signOut();
          this.navCtrl.setRoot(RegisterPage);
          this.navCtrl.goToRoot;


        }}
      ,"الغاء"]
    });
    
    alert.present();

  }


  request(name,des,price){
    this.navCtrl.push(RequistPage,{
      name:name,
      des:des,
      price:price
    })
  }

}
