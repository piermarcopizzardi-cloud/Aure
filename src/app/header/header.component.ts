import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../Material.module';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports:[MaterialModule]
})
export class HeaderComponent {
  constructor(private router: Router, private dialogRef: MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
