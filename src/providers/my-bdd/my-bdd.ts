import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Subscription } from 'rxjs/Subscription';

/*
  Generated class for the MyBddProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.  [x: string]: any;
  [x: string]: any;

*/
@Injectable()
export class MyBddProvider {

  constructor(public http: HttpClient) {
    
    this.getUsers();
  }

  getUsers(): Observable<any> {

    //Renvoi un Observable -> En gros ça envoie un objet qui attend une réponse du serveur
    return this.http.get('http://127.0.0.1:8000/bdd');
  }

}
