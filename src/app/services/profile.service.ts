import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditProfileResponse, ProfileResponse} from 'src/app/index.interface';
import { Subject, delay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string;
  success: boolean;

  private userData = new Subject<ProfileResponse>()

  constructor(private http: HttpClient, private router: Router) { }

  getData(){
  const url = 'http://16.171.41.207:3000/api/profile';
  const userData = this.http.get<ProfileResponse>(url).pipe(delay(100));
  return userData;
}

getEditData(){
  const url = 'http://16.171.41.207:3000/api/profile';
  const userData = this.http.get<EditProfileResponse>(url).pipe(delay(100));
  return userData;
}

setValue(value: ProfileResponse) {
  this.userData.next(value);
}

getValue() {
  return this.userData;
}

}
