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

  // testVal: string = '';

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
  selectedUser: any;
  pinnedUserId: any | undefined;
  startFrom: boolean = false;

  layoutType: string = 'pc';
  scrollOnPC: boolean = false;

  scrollBooster: any;
  scrollBoosterInitialized: boolean = false;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router, private organizationChartService: OrganizationChartService) {
    this.checkLayoutType();
    console.log('data', this.data);
  }

  checkLayoutType() {
    if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.layoutType = 'phone';
    } else {
      this.layoutType = 'pc';
    }
  }

  ngOnInit(): void {
    this.updateScrollBooster();
    this.checkForHash();
    this.getFirstAndLastLetter();
    this.start();
  }

  updateScrollBooster() {
    if (this.layoutType === 'pc') {
      if (this.scrollOnPC) {
        const dimensions = document.getElementById('organigram')?.getClientRects()[0];
        if (dimensions) {
          if (this.scrollBoosterInitialized) {
            this.scrollBooster.updateOptions({
              content: {
                width: dimensions.width * this.scaleMultiplier,
                height: dimensions.height * this.scaleMultiplier
              }
            });
            this.scrollBooster.updateMetrics();
          } else {
            this.scrollBooster = new ScrollBooster({
              viewport: document.querySelector('#scrollContainer'),
              scrollMode: 'native',
              direction: 'transform',
              emulateScroll: false, // scroll on wheel events
            });
            this.scrollBooster.setPosition({
              x: -(dimensions.x * (this.scaleMultiplier / 100)),
              y: -(dimensions.y * (this.scaleMultiplier / 100))
            });
            this.scrollBoosterInitialized = true;
          }
        }
      } else {
        if (this.scrollBoosterInitialized) {
          this.scrollBoosterInitialized = false;
          this.scrollBooster.destroy();
        }
      }
    }
  }

  checkForHash() {
    this.urlHash = window.location.hash.split('#')[1];
    if (this.urlHash && this.data.find(x => x.id === this.urlHash)) {
      this.organizationChartService.pinUserId(this.urlHash);
      // window.location.hash = '';
    }
  }

  getFirstAndLastLetter() {
    this.data.forEach(el => {
      el.firstAndLastLetter = el.firstname?.charAt(0) + '' + el.lastname?.charAt(0);
    });
  }

  // one time call
  start() {
    this.organizationChartService.viewChange.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.updateScrollBooster();
    });
    this.organizationChartService.scaleMultiplier.pipe(takeUntil(this.destroy)).subscribe((val: number) => {
      this.scaleMultiplier < val ? this.calculateNewPosition((val - this.scaleMultiplier) / 100) : this.calculateNewPosition((val - this.scaleMultiplier) / 100);
      this.scaleMultiplier = val;
      this.updateScrollBooster();
    });
    this.organizationChartService.selectedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | undefined) => {
      this.selectedUserId = userId;
      if (userId) {
        this.selectedUser = this.data.find((x: any) => x.id === this.selectedUserId);
      }
    });
    this.organizationChartService.pinnedUserId.pipe(takeUntil(this.destroy)).subscribe((userId: string | null) => {
      if (userId) {
        this.pinnedUserId = userId;
        this.loadOrganigramm();
      }
    });
    this.organizationChartService.startFrom.pipe(takeUntil(this.destroy)).subscribe((start: boolean) => {
      this.startFrom = start;
      this.loadOrganigramm();
    });
    this.organizationChartService.scrollOnPC.pipe(takeUntil(this.destroy)).subscribe((val: boolean) => {
      this.scrollOnPC = val;
      this.updateScrollBooster();
    });
    this.organizationChartService.userToScroll.pipe(takeUntil(this.destroy)).subscribe((val: string | undefined) => {
      if (val) {
        this.scrollToId(val);
      }
    });

  }

  loadOrganigramm() {
    const start = this.data.find(x => x.id === this.pinnedUserId); // finds data for selected value
    if (start) {
      this.organizationChart = [start]; // adds selected data as start reference
      this.organizationChart = this.generateStructure(this.organizationChart); // starts object generation
      this.calculateChildrenLength(this.organizationChart); // loops through the generated structure and adds the total number of children from children ...
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

  calculateChildrenLength(o: any[]) {
    let res = o.length;
    for (const el of o) { // for every organigram object
      if (el.children && el.children.length > 0) { // when the element has children
        el.childrenLength = this.calculateChildrenLength(el.children); // calls the method again for childrenLength of current element
        res += el.childrenLength; // assigns the returned value
      }
    }
    return res; // returns always o.length
  }

  scrollToId(value: string, select?: boolean) {
    /**
     * screenWidth and screenHeight do not need to get multiplied by scaleMultiplier
     * they are already affected by the scaled scrollContainer
     */
    const scrollContainer = document.getElementById('scrollContainer');
    const newElementPos = document.getElementById(value)?.getBoundingClientRect();
    const sm = this.scaleMultiplier / 100; // value is in percent but needs to be a decimal
    if (scrollContainer && newElementPos && sm) {
      const screenWidth = scrollContainer?.offsetWidth / 2; // subtracts newElement width from screenWidth to get a value that centers the new element horizontally
      const screenHeight = scrollContainer?.offsetHeight / 2; // subtracts newElement height from screenHeight to get a value that centers the new element vertically
      const centeredValueX = screenWidth - ((newElementPos.width * sm) / 2);
      const centeredValueY = screenHeight - ((newElementPos.height * sm) / 2);
      scrollContainer.scrollTo({
        left: Math.round(scrollContainer.scrollLeft + ((newElementPos.x * sm) - centeredValueX)), // takes currentPosition X of scrollPosition from scrollContainer and adds newElementPos X and subtracts the centeredValueX
        top: Math.round(scrollContainer.scrollTop + ((newElementPos.y * sm) - centeredValueY)), // takes currentPosition Y of scrollPosition from scrollContainer and adds newElementPos Y and subtracts the centeredValueY
        behavior: 'smooth'
      })
    }
    if (select) {
      setTimeout(() => {
        this.organizationChartService.setSelectedUserId(value);
      }, 500);
    }
  }

  calculateNewPosition(val: number) {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollLeft * (1 + val);
      scrollContainer.scrollTop = scrollContainer.scrollTop * (1 + val);
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}

