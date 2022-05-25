import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationChartService {

  viewChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  selectedUserId: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  pinnedUserId: BehaviorSubject<string | null> = new BehaviorSubject<string | null>('1');
  userToScroll: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  scaleMultiplier: BehaviorSubject<number> = new BehaviorSubject<number>(100);
  startFrom: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  scrollOnPC: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const scaleMultiplier = localStorage.getItem('scaleMultiplier');
    if (scaleMultiplier) {
      this.scaleMultiplier.next(JSON.parse(scaleMultiplier));
    }
    const scrollOnPC = localStorage.getItem('scrollOnPC');
    if (scrollOnPC) {
      this.scrollOnPC.next(JSON.parse(scrollOnPC));
    }
  }

  triggerViewChange() {
    this.viewChange.next(true);
  }

  setSelectedUserId(id: string | undefined) {
    this.selectedUserId.next(id);
  }

  pinUserId(id: string | null) {
    this.pinnedUserId.next(id);
  }

  scrollToUserId(id: string | undefined) {
    this.userToScroll.next(id);
  }

  setScaleMultiplier(val: number) {
    this.scaleMultiplier.next(val);
    localStorage.setItem('scaleMultiplier', JSON.stringify(val));
  }

  getScaleMultiplier(): Observable<number> {
    return this.scaleMultiplier;
  }

  setStartFrom(val: boolean) {
    this.startFrom.next(val);
  }

  setScrollOnPC(val: boolean) {
    this.scrollOnPC.next(val);
    localStorage.setItem('scrollOnPC', JSON.stringify(val));
  }

}
