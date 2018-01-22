import {GamePage} from '../pages/game/game';
import {LoginPage} from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyBddProvider } from '../providers/my-bdd/my-bdd';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    GamePage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    GamePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyBddProvider
  ]
})
export class AppModule {}
