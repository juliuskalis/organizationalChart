import {Component, Input} from '@angular/core';
// @ts-ignore
import JSONdata from "../../apiData/data.json";

@Component({
  selector: 'app-part-organization-chart-settings',
  templateUrl: './organization-chart-settings.component.html',
  styleUrls: ['./organization-chart-settings.component.scss']
})
export class OrganizationChartSettingsComponent {

  @Input() layoutType: string = 'pc';

  data: any[] = JSONdata;

  displayMenu: boolean = true;

  constructor() {

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
