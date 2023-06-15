import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


interface authenticateRes {
  success : boolean,
  token: string
}
interface RegisterRes {
  success : boolean,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class SendService {
  [x: string]: any;

  constructor( private http:HttpClient, private router: Router) { }
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
   ).subscribe({
    complete: () => {
      // add al login il token nel local storage
      this.router.navigate(['home']);
    }
   })
  }


singup(email: string, password: string) {
  return this.http.post<RegisterRes>(
    `${environment.api}/register`,
    {
      email: email,
      password: password
    }
   ).subscribe()
  }

}
