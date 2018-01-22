import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  hide: boolean = true;
  hideD: boolean = true;

  hide1: boolean = true;
  hide12: boolean = false;
  hide13: boolean = false;

  hide2: boolean = true;
  hide22: boolean = false;
  hide23: boolean = false;

  hide3: boolean = true;
  hide32: boolean = false;
  hide33: boolean = false;

  hide4: boolean = true;
  hide42: boolean = false;
  hide43: boolean = false;

  hide5: boolean = true;
  hide52: boolean = false;
  hide53: boolean = false;

  hide6: boolean = true;
  hide62: boolean = false;
  hide63: boolean = false;

  chara1: number = 2;
  chara2: number = 2;
  chara3: number = 2;
  chara4: number = 2;
  chara5: number = 2;
  chara6: number = 2;

  selected: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  showAttack(){
      this.hide = false;
  }

  choice1(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 1;
  }
  choice2(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 2;
  }
  choice3(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 3;
  }

  choice4(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 4;
  }
  choice5(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 5;
  }
  choice6(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 6;
  }

  choice12(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 12;
  }
  choice22(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 22;
  }
  choice32(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 32;
  }

  choice42(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 42;
  }
  choice52(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 52;
  }
  choice62(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 62;
  }

  choice13(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 13;
  }
  choice23(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 23;
  }
  choice33(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 33;
  }

  choice43(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 43;
  }
  choice53(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 53;
  }
  choice63(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 63;
  }

  attackF(){

    if(this.selected == 1){
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide4 = false;
        this.hide42 = true;

        this.hide1 = false;
        this.hide12 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2; 
        }
      }    
    }

    if(this.selected == 12){
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide42 = false;
        this.hide43 = true;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    if(this.selected == 13){
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide43 = false;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }
  }

  attackC(){

    if(this.selected == 1){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide4 = false;
        this.hide42 = true;

        this.hide1 = false;
        this.hide12 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2; 
        }
      }    
    }

    if(this.selected == 12){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide42 = false;
        this.hide43 = true;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    if(this.selected == 13){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide43 = false;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }
  }
}
