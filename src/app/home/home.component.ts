import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone : true,
  imports : [
    ProfileComponent,
  ]
})
export class HomeComponent {
    constructor(private route: Router){}


    logout(){
      this.route.navigateByUrl("/login");
      localStorage.removeItem("token");
    }


};
