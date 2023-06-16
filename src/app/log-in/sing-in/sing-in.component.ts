import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Material.module';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  standalone : true,
  imports : [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SingInComponent {
  singForm: FormGroup;
  isSinginMode: true;

  onSubmit(){

  }

  switchSing(){

  }
}
