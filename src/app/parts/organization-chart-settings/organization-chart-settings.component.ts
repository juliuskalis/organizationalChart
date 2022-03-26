import { Component } from '@angular/core';
// @ts-ignore
import JSONdata from "../../apiData/data.json";

@Component({
  selector: 'app-part-organization-chart-settings',
  templateUrl: './organization-chart-settings.component.html',
  styleUrls: ['./organization-chart-settings.component.scss']
})
export class OrganizationChartSettingsComponent {

  data: any[] = JSONdata;

  displayMenu: boolean = true;

  layoutType: string = 'pc';

  constructor() {
    const device = localStorage.getItem('device');
    if (device && device === 'pc') {
      this.layoutType ='pc';
    } else {
      this.layoutType ='phone';
    }
    const e = localStorage.getItem('displayMenu');
    if (e) {
      this.displayMenu = JSON.parse(e);
    }
  }

  toggleMenu() {
    this.displayMenu = !this.displayMenu;
    localStorage.setItem('displayMenu', JSON.stringify(this.displayMenu));
  }

}
