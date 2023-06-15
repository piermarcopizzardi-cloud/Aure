import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { SendService } from './send.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  isLoginMode = true;
  loginForm : FormGroup;

  // on send verra usata per mandare i dati interessati al backEnd
  constructor(public authServ: SendService){}

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    if(this.isLoginMode){
      try {
        // metodo per prendere i dati dal log-in
        this.authServ.login(this.loginForm.value.email, this.loginForm.value.password);
      } catch(e) {
        // inserire variabile di errore ,
        // error 401 = user o pass errate .
        // stampare in output il messagio di error
        console.log(e)
      }
    } else {
      try {
        // metodo per prendere i dati dal log-in
        this.authServ.singup(this.loginForm.value.email, this.loginForm.value.password);
      } catch(e) {
        console.log(e)
      }
      this.loginForm.reset();
      this.onSwitchMode();
    }
  }

  //possibilità di switch da log a sing in
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}


