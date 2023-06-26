import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material.module';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Subject, lastValueFrom } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileResponse } from 'src/app/index.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [`
     .profile-wrapper {
    max-width: 800px;
    margin: auto;
    height: 100%;
  }
   .profile{
    margin-top: 9rem;

   }
   .edit{
      width:100%;
   }
    `],
  standalone : true,
  imports : [
    CommonModule,
    ProfileComponent,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule
  ],

})
export class EditComponent {
  editForm: FormGroup;
  isLoading : boolean = false;
  error : string = "";


  constructor(public router: Router, public homeService: HomeService, public profileServ: ProfileService){
    this.editForm = new FormGroup({
      name: new FormControl(""),
      surname: new FormControl(""),
      address: new FormControl(""),
      phoneNumber: new FormControl("")
    })
  }

  ngOnInit(): void {
    this.populateFormEdit();
  }


  async populateFormEdit(){
    this.isLoading = true;
    try{
      const profileData = await lastValueFrom(this.profileServ.getEditData());
      this.editForm.patchValue(profileData.profile);
    }catch(err){
      console.log(err)
    }finally{
      this.isLoading = false;
    }
  }

  async onSubmit(){
    this.isLoading = true;
    this.error = "";
    try{
      await lastValueFrom(this.homeService.updateProfile(this.editForm.value));
      this.router.navigate(['home']);
    }catch(err){
      this.error = 'qualcosa è andato storto...';
      console.log(err)
    }finally{
      this.isLoading = false;
    }
  };


  goHome(){
    this.router.navigate(['home']);
  };
}


  // da copiare su onSubmit()
  // async onSub() {
  //   try {
  //     const response = await lastValueFrom(this.regServ.singup(this.singForm.value.email, this.singForm.value.password, this.singForm.value.name, this.singForm.value.surname).pipe(map((res)=> res.token)));
  //     window.localStorage.setItem('token', response );
  //     this.regServ.saveSinginData(response)
  //     // come collegare al register la Login Page ?
  //     this.router.navigateByUrl("/src/app/log-in/log-in.component.html");
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }




