import { Component, OnInit } from '@angular/core';
import { ProfileResponse } from 'src/app/index.interface';
import { Observable, catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { MaterialModule } from 'src/app/Material.module';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [`
    .profile-wrapper {
    max-width: 800px;
    margin: auto;
    height: 100%;
  }
   .profile{
    margin-top: 10rem;
   }
   .edit{
      width:100%;
   }

  `],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0%)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate(100)
  //     ]),
  //     state('out', style({ transform: 'translateX(100%)' })),
  //     transition('* => void', [
  //       animate(100, style({ transform: 'translateX(0%)' }))
  //     ])
  //   ])
  // ]
})
export class ProfileComponent implements OnInit {
  // con intercept
  constructor(private dataSend: ProfileService, public route: Router) { }
  error: string = "";
  public userData$!: Observable<ProfileResponse>;
  userData!: ProfileResponse[]

   ngOnInit() {
     this.userData$ = this.dataSend.getData().pipe(
      map((e) => {
        this.dataSend.setValue(e);
        return e;
      }),
      catchError((err) => {
      this.error = "Qualcosa è andato storto...."
      return of(null)
    }));



  }
// variabile di userdata.getData

  edit() {
    this.route.navigate(["/edit"]);
  }


}
