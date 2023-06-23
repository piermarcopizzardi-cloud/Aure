import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileData } from 'src/app/index.interface';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  url: string;
  success: boolean;

  updateProfile(userData: ProfileData) {
    const url = 'http://16.171.41.207:3000/api/profile/update';
    return this.http.put<ProfileData>(url, userData)

  }
}
