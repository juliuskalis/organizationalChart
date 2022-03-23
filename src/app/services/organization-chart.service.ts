import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationChartService {

  selectedUserId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  pinnedUserId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('1');
  userToScroll: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('');
  scaleMultiplier: BehaviorSubject<number> = new BehaviorSubject<number>(100);
  startFrom: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setSelectedUserId(id: string | null) {
    console.log(id);
    this.selectedUserId.next(id);
  }

  pinUserId(id: string | null) {
    this.pinnedUserId.next(id);
  }

  scrollToUserId(id: string | null) {
    console.log(id);
    this.userToScroll.next(id);
  }

  setScaleMultiplier(val: number) {
    this.scaleMultiplier.next(val);
  }

  setStartFrom(val: boolean) {
    this.startFrom.next(val);
  }

}
