import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileResponse, RegisterRes} from 'src/app/index.interface';
import { Observable, delay } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient, private router: Router) { }
  url: string;
  success: boolean;

  getData(){
  const url = 'http://198.18.192.223:4000/api/profile';
  return this.http.get<ProfileResponse>(url).pipe(delay(1000));
}


// homeData(email: string, name: string, surname:string, address: string, phoneNumber: string  ) {
//   return this.http.get<getResponse>(
//     `${environment.api}/profile`,
//     {
//       name: name,
//       surname: surname,
//       address: address,
//       phoneNumber: phoneNumber
//     }
//   ).subscribe()
// }
}
