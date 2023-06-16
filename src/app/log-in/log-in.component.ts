import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SendService } from './send.service';
import { Router, Routes } from '@angular/router';
import { Token } from '@angular/compiler';
import { Observable, catchError, finalize, lastValueFrom, map, of } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { MaterialModule } from '../Material.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  standalone : true,
  imports : [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LogInComponent {
  isLoginMode = true;
  loginForm: FormGroup;
  user!: any;
  isLoading : boolean = false;

  // on send verra usata per mandare i dati interessati al backEnd
  constructor(public authServ: SendService, private router: Router) { }
  a = this.authServ.getLoginData()

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  swichSing() {
    this.router.navigate(['register']); //funziona, ma capire come indirizzarlo all'html annidato

  }

  onSubmitObs(){
    this.isLoading = true;
    this.authServ.login(this.loginForm.value.email, this.loginForm.value.password).pipe(finalize(() => this.isLoading = false),catchError(err => {
      console.log(err)
      return of(null)
    }),map((res) => res.token)).subscribe(data => {
      window.localStorage.setItem('token', data);
      this.authServ.saveLoginData(data)
    })
  }


  async onSubmit() {
    this.isLoading = true;
    try {
      const response = await lastValueFrom(this.authServ.login(this.loginForm.value.email, this.loginForm.value.password).pipe(map((res) => res.token) ));
      window.localStorage.setItem('token', response);
      this.authServ.saveLoginData(response)
      this.router.navigateByUrl("/home");
    } catch (e) {
      console.log(e)
    }finally{
      this.isLoading = false;
    }
  }


  goRegistration(){
    this.router.navigate(['/register'])
  }
}


