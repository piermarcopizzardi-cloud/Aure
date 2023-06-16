import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterRes, authenticateRes } from '../index.interface';
import { Token } from '@angular/compiler';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SendService {
  [x: string]: any;

  constructor(private http: HttpClient, private router: Router) { }
  success: boolean;
  token: string;
  url: string;
  // logica http
  // post al back con token
  // controlli VERIFICA LOG-IN

  // magari si puo usare il subscribe per attaccare alla post la home page

  login(email: string, password: string) {
    return this.http.post<authenticateRes>(
      `${environment.api}/login`,
      {
        email: email,
        password: password
      }
    )
  };


  // local storage saving data
  public saveLoginData(token: string) {
    console.log('token in localStorage')
  }


  public getLoginData(){
    const token = localStorage.getItem("token");
    const scadenza = localStorage.getItem('scad');
    if(!token|| !scadenza){
      return;
    }
    return{
      token: token,
      scadenza: new Date(scadenza)
    }
  }

  // // c'e da capire come implementarlo , non e richiesto da aure, se mai si elimina
  // autoLoginUser() {
  //   const authInformation = this.getLoginData();
  //   const now = new Date();
  //   const isInFuture = authInformation.scadenza > now;
  //   if(isInFuture){
  //     this.token = authInformation.token;
  //     this.isAuthenticated = true;
  //     this.authStatusListener.next(true);
  //   }
  // }
  // ci sarebbe da creare un metodo per il timer di logout , ma non abbiamo il logout quindi non ci serve


}

