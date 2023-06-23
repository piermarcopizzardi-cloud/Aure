import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, map } from 'rxjs';
import { MaterialModule } from 'src/app/Material.module';
import { SingService } from '../../services/sing-in.service';
import { __values } from 'tslib';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  standalone : true,
  imports : [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SingInComponent {
  constructor(public router : Router, public regServ: SingService, private http: HttpClient){}
  singForm: FormGroup;
  isSinginMode: true;
  isLoading: boolean;

  ngOnInit(): void {
    this.singForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })
  }

  registrationSuccess = false;
link = '';


onSub() {
  if (this.singForm.invalid) {
    return;
  }

  const data = this.singForm.value;
  this.http.post<any>('http://16.171.41.207:3000/api/user/register', data)
    .subscribe(
      response => {
        if (response) {
          this.registrationSuccess = true;
          this.link = response.index;
        }
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
}

postData() {
  this.http.post<any>('http://16.171.41.207:3000/api/user/authy/' + this.link, {})
    .subscribe(
      response => {
        console.log(this.registrationSuccess);
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
}
goLogin(){
   this.router.navigate(['login'])
 }
register(){

 this.router.navigate(['login']);
 }
}





// post con axios funzionante
  // async onSub() {
  //   try {
  //     const data = this.singForm.value;
  //     const response = await axios.post('http://16.171.41.207:3000/api/user/register', data);
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
  //     const response = await axios.post('http://16.171.41.207:3000/api/user/authy/' + this.link);
  //     console.log(this.registrationSuccess);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  // async postData() {
  //   try {
  //     const response = await axios.post('http://16.171.41.207:3000/api/user/authy/' + this.link);
  //     console.log(this.registrationSuccess);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }






  // async onSub() {
    //questo e quello che funzionava prima dell'implementazione del autenticazione
  //   try {
  //     const response = await lastValueFrom(this.regServ.singup(this.singForm.value.email, this.singForm.value.password).pipe(map((res)=> res.token)));
  //     window.localStorage.setItem('token', response );
  //     this.regServ.saveSinginData(response)
  //     // come collegare al register la Login Page ?
  //     // this.router.navigateByUrl("/src/app/log-in/log-in.component.html");
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }




/*

  registrationSuccess = false;
  link = '';

  async onSubmit() {
    try {
      const data = this.registrationForm.value;
      const response = await http.post('http://16.171.41.207:3000/api/user/register', data);
      if (response.data) {
        this.registrationSuccess = true;
        this.link = response.data.index;
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async postData() {
    try {
      const response = await axios.post('http://16.171.41.207:3000/api/user/authy/' + this.link);
      console.log(this.registrationSuccess);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

*/
