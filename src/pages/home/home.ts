import {LoginPage} from '../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage: typeof LoginPage;

  constructor(public navCtrl: NavController) {
    this.loginPage = LoginPage;
  }

}
