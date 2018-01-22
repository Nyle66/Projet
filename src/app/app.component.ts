import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  demo: Date;
    header: Date;
    nonForm: Date;
    demoSettings: any = {
        theme: 'ios',
        lang: 'fr',
        display: 'bottom'
    };
    headerSettings: any = {
        theme: 'ios',
        lang: 'fr',
        display: 'bottom',
        headerText: '{value}'
    };
    nonFormSettings: any = {
        theme: 'ios',
        lang: 'fr',
        display: 'bottom'
    };

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

