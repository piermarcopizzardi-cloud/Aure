import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { ProfileResponse} from 'src/app/index.interface';
import { Observable, catchError, lastValueFrom, of } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone : true,
  imports : [
    CommonModule
  ]
})
export class ProfileComponent implements OnInit {
  // con intercept
  constructor(private dataSend: HomeService){}
  error : string = "";
  userData$! : Observable<ProfileResponse>;

  ngOnInit(): void {
    this.userData$ = this.dataSend.getData().pipe(catchError((err) => {
      this.error = "Qualcosa è andato storto...."
      return of(null)
    }));
  }

}
