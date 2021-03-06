import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import * as $ from 'jquery'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { PanelPage } from '../panel/panel';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */  

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public auth : AngularFireAuth,
      public alert : AlertController,public load : LoadingController,
      public db : AngularFireDatabase) {

 
  }

  ionViewDidLoad() {
   console.log("cccccccccccccccccccccccccccccccccccccccccccc")
  }

  ngOnInit(){
  var winh = $(window).height();
  var navh = $(".header").innerHeight();

  $(".header-content").height(winh - navh);

  }


  showalert(message){
    var alert = this.alert.create({
      subTitle:message,
      cssClass:"dirion",
      buttons:["حسنا"]
    });
    return alert.present();
  }




  singup(email,name,pass){
    var load = this.load.create({
      content:"جاري انشاء الحساب",
      cssClass:"dirion"
    });


    if(email.length > 1 && name.length > 1 && pass.length > 1){

    load.present();

      this.auth.auth.createUserWithEmailAndPassword(email,pass).then( ()=> {
      
        load.dismiss();

        var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"];
        var rand1 = Math.floor(Math.random() * char.length);
        var rand2 = Math.floor(Math.random() * char.length);
        var rand3 = Math.floor(Math.random() * char.length);
        var rand4 = Math.floor(Math.random() * char.length);
        var rand = char[rand1] + char[rand2] + char[rand3] + char[rand4];

        this.navCtrl.setRoot(TabsPage);
        this.navCtrl.goToRoot;

          this.db.list("users").push({
            email:email,
            name:name,
            id:rand,
            image:"https://firebasestorage.googleapis.com/v0/b/raeak-iq.appspot.com/o/man.png?alt=media&token=cc38bf2e-5ea3-4210-bafe-25dcf3674013",
          }).then(  ()=> {
            $("input").val("");
          })


      }).catch(err => {
      

        load.dismiss();

         if(err.message == "The email address is badly formatted."){
           this.showalert("بريد الكتروني غير صالح")
         }

         if(err.message == "The email address is already in use by another account."){
          this.showalert("بريد الكتروني مستخدم")
         }

         if(err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
           this.showalert("يرجى التحقق من الاتصال بلشبكة")
         }

       if(err.message == "Password should be at least 6 characters"){
         this.showalert("كلمة مرور قصيرة");
       }

         console.log(err.message);


      })
    }
  }


  
  login(email,pass){



      var load = this.load.create({
        content:"جاري تسجيل الدخول",
        cssClass:"dirion"
      });

    if(email.length > 4 && pass.length >= 6){
      load.present();
      this.auth.auth.signInWithEmailAndPassword(email,pass).then( (user)=> {
        load.dismiss();
        if(user){

        
        if(email == "admin@admin.com"){
          this.navCtrl.setRoot(PanelPage);
          this.navCtrl.goToRoot;
        } else{
          this.navCtrl.setRoot(TabsPage);
          this.navCtrl.goToRoot;
        }
      }

      
      

      }).catch( err => {
        load.dismiss();
        console.log(err.message);
        if(err.message == "The password is invalid or the user does not have a password."){
          this.showalert("كلمة مرور غير صحيحة")
        }

        if(err.message == "There is no user record corresponding to this identifier. The user may have been deleted."){
          this.showalert("بريد الكتروني غير موجود")
        }

        if(err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred."){
          this.showalert("يرجى التحقق من الاتصال بلشبكة")
        }

      });

    }

  }




  about(){
    this.navCtrl.push(ContactPage)
  }
  
}