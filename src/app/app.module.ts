import { AddfastJuicesPage } from './../pages/addfast-juices/addfast-juices';
import { AdddessertPage } from './../pages/adddessert/adddessert';
import { AddEntreesPage } from './../pages/add-entrees/add-entrees';
import { AddmainmenuPage } from './../pages/addmainmenu/addmainmenu';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var config = {
  apiKey: "AIzaSyAYP4wKdUsfLGROp4rHtBou-3O-Pgydh74",
  authDomain: "rest-4e3c4.firebaseapp.com",
  databaseURL: "https://rest-4e3c4.firebaseio.com",
  projectId: "rest-4e3c4",
  storageBucket: "rest-4e3c4.appspot.com",
  messagingSenderId: "161760989760",
  appId: "1:161760989760:web:6cceec860734f02f"
};

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PanelPage } from '../pages/panel/panel';
import { AddfodPage } from '../pages/addfod/addfod';
import { RequistPage } from '../pages/requist/requist';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { RegisterPage } from '../pages/register/register';
import { AdminrequestPage } from '../pages/adminrequest/adminrequest';
import { CallNumber } from '@ionic-native/call-number';
import { MenufoodPage } from '../pages/menufood/menufood';
import { EditPage } from '../pages/edit/edit';
import { NotificationPage } from '../pages/notification/notification';
import { ReversePipe } from '../pipes/reverse/reverse';
import { AddfastmealsPage } from '../pages/addfastmeals/addfastmeals';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PanelPage,
    AddfodPage,
    RequistPage,
    RegisterPage,
    EditPage,
    AdminrequestPage,
    MenufoodPage,
    NotificationPage,
    ReversePipe,
    AddmainmenuPage,
    AddEntreesPage,
    AddfastmealsPage,
    AdddessertPage,
    AddfastJuicesPage,
    MainmenuPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PanelPage,
    AddfodPage,
    RequistPage,
    RegisterPage,
    EditPage,
    AdminrequestPage,
    MenufoodPage,
    NotificationPage,
    AddmainmenuPage,
    AddEntreesPage,
    AddfastmealsPage,
    AdddessertPage,
    AddfastJuicesPage,
    MainmenuPage
  ],
  providers: [
    StatusBar,
    CallNumber,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
