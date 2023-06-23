import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data$ = new BehaviorSubject<any>({});
  selectedData$ = this.data$.asObservable();


  getProfileValue(data: string){
    this.data$.next(data);
  }

}
