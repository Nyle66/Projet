import {GamePage} from '../game/game';
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
  gamePage: any;


  public users: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public MyBddProvider: MyBddProvider) {
    this.gamePage = GamePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.MyBddProvider.getUsers()
      //Au moment ou la requête est terminé, subscribe se déclenche !
      .subscribe( (data) => {
            var users = data;
            console.log(users);
      },
        err => {
            alert(err);
      });
    
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
