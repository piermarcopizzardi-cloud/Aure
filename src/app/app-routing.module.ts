import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SingInComponent } from './log-in/sing-in/sing-in.component';
import { EditComponent } from './home/edit/edit.component';
import { ProfileComponent } from './home/profile/profile.component';

const authGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  if(token){
    return true;
  }
  router.navigateByUrl("/login");
  return  false;
}


const routes: Routes = [
  {
    path: '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component: LogInComponent,

  },
  {
    path : 'register',
    component: SingInComponent,
  },
  {
    path: 'home',
    //lazy load modulo di home , tramite arrow.
    // altrimenti lazy load di componente standalone
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
     canActivate: [authGuard],
  },
  {
    path:'profile',
    component: ProfileComponent,
    // loadComponent: () => import('./home/profile/profile.component').then(m => m.ProfileComponent),
  },
  {
    path:'edit',
    component: EditComponent,
    // loadComponent: () => import('./home/edit/edit.component').then(m => m.EditComponent),
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
