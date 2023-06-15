import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

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
    component: LogInComponent,
  },
  {
    path: 'home',
    //lazy load modulo di home , tramite arrow.
    // altrimenti lazy load di componente standalone
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
