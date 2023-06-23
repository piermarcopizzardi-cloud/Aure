import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../Material.module';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  standalone:true,
  imports: [MaterialModule]
})
export class PopUpComponent {
  constructor(private router : Router, private dialog: Dialog){}
  logout(){
    this.router.navigate(['login']);
    this.dialog.closeAll();
    window.localStorage.removeItem('token');
  }
}
