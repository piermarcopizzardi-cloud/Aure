import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterRes } from 'src/app/index.interface';
import axios from 'axios';



@Injectable({
  providedIn: 'root'
})
export class SingService {
  [x: string]: any;

  constructor(private http: HttpClient, private router: Router) { }
  url: string;
  success: boolean;


//   async postData() {
//     try {
//       const response = await axios.post('http://16.171.41.207:3000/api/user/authy/' + this.link);
//       console.log(this.registrationSuccess);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

// singup(email: string, password: string) {
//   return this.http.post<RegisterRes>(
//     `${environment.api}/register`,
//     {
//       email: email,
//       password: password,
//     }
//   )}
//   public saveSinginData(token: string) {
//     console.log('token in localStorage')
//   }



// funzionavano sul vecchio back-end
  // async onSubmit() {
  //   try {
  //     const data = this.singForm.value;
  //     const response = await this.http.post('http://16.171.41.207:3000/api/user/register', data);
  //     if (response.data) {
  //       this.registrationSuccess = true;
  //       this.link = response.data.index;
  //     }
  //     console.log(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // async postData() {
  //   try {
  //     const response = await http.post('http://16.171.41.207:3000/api/user/authy/' + this.link);
  //     console.log(this.registrationSuccess);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

}
