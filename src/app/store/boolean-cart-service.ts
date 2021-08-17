import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class booleanCartService {

  private routerInfo: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor() {
     
  }

  getValue(): BehaviorSubject<boolean> {
    return this.routerInfo;
  }
  setValue(newValue:BehaviorSubject<boolean>): void {
    this.routerInfo.next(newValue.value);
  }

}