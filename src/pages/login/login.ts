import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyBddProvider } from '../../providers/my-bdd/my-bdd';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [MyBddProvider]
})
export class LoginPage {

  public users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public MyBddProvider: MyBddProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.users = JSON.stringify(this.MyBddProvider.getUsers());
    console.log(this.users);
  }

  login(){
    // if(){
    //   console.log("succes");
    // }
    // else{
    //   console.log("fail");
    // }
  }

}
