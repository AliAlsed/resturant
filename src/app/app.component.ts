import { MainmenuPage } from './../pages/mainmenu/mainmenu';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterPage } from '../pages/register/register';
import { AngularFireDatabase } from '@angular/fire/database';
import { PanelPage } from '../pages/panel/panel';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public auth : AngularFireAuth,public db : AngularFireDatabase) {

      auth.authState.subscribe(user => {
        if(user == undefined){
          this.rootPage = MainmenuPage
        } else {
          this.rootPage = PanelPage
        }
      })
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      

  


    });
  }


}
