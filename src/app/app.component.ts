import { Component } from '@angular/core';
import { SendService } from './log-in/send.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAure';
constructor(private authService: SendService){

}
ngOnInit(){
  // this.authService.autoLoginUser();
}

}
