import {Component, OnInit} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
// @ts-ignore
import JSONdata from '../../apiData/data.json';
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
// @ts-ignore
import ScrollBooster from 'scrollbooster';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent implements OnInit {

  data: any[] = JSONdata;
  organizationChart: any[] = [];
  go = true;

  displayChildren: boolean = true;
  displayName: boolean = true;
  displayTitle: boolean = false;
  clipped: string = 'null';
  urlHash: string | null | undefined;

  scaleMultiplier: number = 100;

  selectedUserId: string | undefined;
  currentPinnedUser: any | undefined;
  startFrom: boolean = false;

  layoutType: string = 'pc';
  scrollOnPC: boolean = false;
  
  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private organizationChartService: OrganizationChartService) {
    this.checkLayoutType();
    console.log('data', this.data);
  }

  checkLayoutType() {
    if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.layoutType ='phone';
    } else {
      this.layoutType ='pc';
    }
  }

  ngOnInit(): void {
    this.checkForHash();
    this.getFirstAndLastLetter();
    this.start();
    this.checkForScrollOnPC();
  }

  checkForScrollOnPC() {
    new ScrollBooster({
      viewport: document.querySelector('#scrollContainer'),
      scrollMode: 'native',
      direction: 'transform',
      emulateScroll: false, // scroll on wheel events
    });

    this.organizationChartService.scrollOnPC.pipe(takeUntil(this.destroy)).subscribe((val: boolean) => {
      this.scrollOnPC = val;
    });
  }

  checkForHash() {
    this.urlHash = window.location.hash.split('#')[1];
    if (this.urlHash && this.data.find(x => x.id === this.urlHash)) {
      this.organizationChartService.pinUserId(this.urlHash);
      window.location.hash = '';
    }
  }

  getFirstAndLastLetter() {
    this.data.forEach(el => {
      el.firstAndLastLetter = el.firstname?.charAt(0) + '' + el.lastname?.charAt(0);
    });
  }

  // one time call
  start() {
    this.organizationChartService.scaleMultiplier.pipe(takeUntil(this.destroy)).subscribe((val: number) => {
      this.scaleMultiplier = val;
    });
    this.organizationChartService.selectedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | null) => {
      if (userId) {
        this.selectedUserId = userId;
      }
    });
    this.organizationChartService.pinnedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | null) => {
      if (userId) {
        this.clipped = userId;
        this.loadOrganigramm();
      }
    });
    this.organizationChartService.startFrom.pipe(takeUntil(this.destroy)).subscribe((start: boolean) => {
      this.startFrom = start;
      this.loadOrganigramm();
    });
  }

  loadOrganigramm() {
    const start = this.data.find(x => x.id === this.clipped); // finds data for selected value
    if (start) {
      this.organizationChart = [start]; // adds selected data as start reference
      this.organizationChart = this.generateStructure(this.organizationChart); // starts object generation
      if (!this.startFrom) {
        this.organizationChart = this.getParent(this.organizationChart); // starts object generation for parents
      }
    }
  }

  generateStructure(org: any[]): any[] {
    for (const el of org) { // for every organigram object
      el.displayChildren = this.displayChildren; // sets displayChildren boolean for children
      const children = this.getChildren(el.id); // gets children of element
      if (children.length > 0) { // when the element has children
        el.children = this.generateStructure(children); // calls the method again for children of current element
      }
    }
    return org;
  }

  getParent(org: any[]): any[] {
    let res = org; // returns paramater
    const parent = this.data.find(x => x.id === org[0].parentId); // finds parent of org
    if (parent) {
      parent.displayChildren = this.displayChildren;
      parent.children = org; // asigns org to parent
      res = this.getParent([parent]); // calls method again to get next parent
    }
    return res;
  }

  getChildren(id: string | null): any[] {
    return this.data.filter(x => x.parentId === id); // gets children of element
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}

