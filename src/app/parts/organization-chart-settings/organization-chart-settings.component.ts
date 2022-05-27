import {Component, Input, OnDestroy, OnInit} from '@angular/core';
// @ts-ignore
import JSONdata from "../../apiData/data.json";
import {Subject, takeUntil} from "rxjs";
import {OrganizationChartService} from "../../services/organization-chart.service";
import {scale, transformInOut} from "../../animations/animations";

@Component({
  selector: 'app-part-organization-chart-settings',
  templateUrl: './organization-chart-settings.component.html',
  styleUrls: ['./organization-chart-settings.component.scss'],
  animations: [transformInOut, scale]
})
export class OrganizationChartSettingsComponent implements OnInit, OnDestroy {

  @Input() layoutType: string = 'pc';

  data: any[] = JSONdata;

  displayMenu: boolean = true;

  presentationMode: boolean = false;
  disablePresentationModeButton: boolean = false;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private organizationChartService: OrganizationChartService) {
    const e = localStorage.getItem('displayMenu');
    if (e) {
      this.displayMenu = JSON.parse(e);
    }
  }

  ngOnInit() {
    this.organizationChartService.presentationMode.pipe(takeUntil(this.destroy)).subscribe((mode: boolean) => {
      this.presentationMode = mode;
    });
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
    localStorage.setItem('displayMenu', JSON.stringify(this.displayMenu));
  }

  disablePresentationMode() {
    this.organizationChartService.setPresentationMode(false);
    this.disablePresentationModeButton = false;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
