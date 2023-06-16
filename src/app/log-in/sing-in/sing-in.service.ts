import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterRes } from 'src/app/index.interface';



@Injectable({
  providedIn: 'root'
})
export class SendService implements RegisterRes {
  [x: string]: any;

  constructor(private http: HttpClient, private router: Router) { }
  url: string;
  success: boolean;

singup(email: string, password: string, name:string, username:string) {
  return this.http.post<RegisterRes>(
    `${environment.api}/register`,
    {
      email: email,
      password: password,
      name: name,
      usarname: username
    }
  ).subscribe()
}
}
