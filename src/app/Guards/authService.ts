import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // TODO: guardare struttura token
  isLoggedIn() {
    try{
      const token = localStorage.getItem('token'); // get token from local storage
      const payload = atob(token.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object

      return parsedPayload.exp > Date.now() / 1000; // check if token is expired

    }catch(e){
        return false;
    }

  }

}
