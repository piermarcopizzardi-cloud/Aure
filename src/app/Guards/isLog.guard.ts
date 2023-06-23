// questo lo usiamo per impedire l'accesso al ap finche il log-in non e eseguito
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SendService } from '../services/send.service';
import { AuthService } from './authService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private send: SendService, private router: Router, private authService : AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']); // go to login if not authenticated
      return false;
    }else{
      this.router.navigate(['home'])
    }
  return true;
  }
}
