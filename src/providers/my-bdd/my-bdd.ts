import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getUsers(){
    this.http.get('http://127.0.0.1:8000/bdd')
            .subscribe(data => {
                var users = data;
                console.log(users);
                //return users;
                //alert(JSON.stringify(data));
       },
            err => {
                alert(err);
      });
  }

}
