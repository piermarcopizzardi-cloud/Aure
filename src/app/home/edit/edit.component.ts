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
  data!: Subject<ProfileResponse>;
  constructor(public router: Router, public homeService: HomeService, public profileServ: ProfileService){}

  // usare behaviour Subject (rxjs)

  // event emitter e emit per il passaggio di dati da profile , ad edit
  // magari usare ngif nel html per settare i dati al interno degli input


 userData$ = this.profileServ.getData()
 test: any
  ngOnInit(): void {
    this.data = this.profileServ.getValue()
    console.log(this.data)

    this.editForm = new FormGroup({
      //this.data.subscribe( e => e.name) <- usato per arrivare ad avere Object object nel form
      name: new FormControl(this.data.subscribe( e => this.test = e.name)),
      surname: new FormControl(this.data.subscribe( e => e.surname)),
      address: new FormControl(this.data.subscribe( e => e.address)),
      phoneNumber: new FormControl(this.data.subscribe( e => e.phoneNumber))
    })

    // ci sono da inserire i valori della login
    //this.data.next.name
    // this.editForm.setValue({
    //   name: [this.profileServ.getData(this.)],
    //   surname: [],
    //   adress: [],
    //   phoneNumber: []
    // });

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




