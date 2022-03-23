import { Component } from '@angular/core';
// @ts-ignore
import JSONdata from "../../apiData/data.json";
import {OrganizationChartService} from "../../services/organization-chart.service";

@Component({
  selector: 'app-part-organization-chart-settings',
  templateUrl: './organization-chart-settings.component.html',
  styleUrls: ['./organization-chart-settings.component.scss']
})
export class OrganizationChartSettingsComponent {

  data: any[] = JSONdata;

  displayMenu: boolean = true;

  clipped: string = 'null';
  selectedUserId: string | undefined;
  scaleMultiplier: number = 100;

  displayChildren: boolean = true;
  displayName: boolean = true;
  displayTitle: boolean = false;

  currentPinnedUser: any | undefined;
  switchValues: any[] = [
    {
      id: 'name',
      text: 'Name anzeigen',
      value: true
    },
    {
      id: 'title',
      text: 'Titel anzeigen',
      value: true
    },
    {
      id: 'children',
      text: 'Kinder anzeigen',
      value: true
    }
  ];

  constructor(private organizationChartService: OrganizationChartService) {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const a = localStorage.getItem('displayName');
    if (a) {
      this.displayName = JSON.parse(a);
    }
    const b = localStorage.getItem('displayTitle');
    if (b) {
      this.displayTitle = JSON.parse(b);
    }
    const c = localStorage.getItem('displayChildren');
    if (c) {
      this.displayChildren = JSON.parse(c);
    }
    const d = localStorage.getItem('scaleMultiplier');
    if (d) {
      this.scaleMultiplier = JSON.parse(d);
      this.organizationChartService.setScaleMultiplier(this.scaleMultiplier);
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

  // setSwitchValueOf(value: string, e: boolean): void {
  //   console.log(value, e);
  //   this.switchValues.find(x => x.id === value).value = e;
  //   // this.organizationChartService.setSwitchValues(this.switchValues);
  // }

  resetScaleMultiplier() {
    this.scaleMultiplier = 100;
    this.organizationChartService.setScaleMultiplier(this.scaleMultiplier);
    localStorage.setItem('scaleMultiplier', JSON.stringify(this.scaleMultiplier));
  }

  setScaleMultiplier(val: boolean) {
    if (val && this.scaleMultiplier < 200) {
      this.scaleMultiplier += 10;
      this.organizationChartService.setScaleMultiplier(this.scaleMultiplier);
      localStorage.setItem('scaleMultiplier', JSON.stringify(this.scaleMultiplier));
    } else if (!val && this.scaleMultiplier > 10) {
      this.scaleMultiplier -= 10;
      this.organizationChartService.setScaleMultiplier(this.scaleMultiplier);
      localStorage.setItem('scaleMultiplier', JSON.stringify(this.scaleMultiplier));
    }
  }

  removePinnedUser() {
    if (this.clipped !== 'null') {
      this.organizationChartService.pinUserId('null');
    }
  }

  getUserObject(): void {
    if (this.clipped !== null && this.clipped !== 'null') {
      this.currentPinnedUser = this.data.find(x => x.id === this.clipped);
    }
  }

  copyTextToClipboard(id: string | undefined | null) {
    if (id === undefined || id === null) {
      return;
    }
    const textArea = document.createElement('textarea');

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if the element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a
    // flash, so some of these are just precautions. However in
    // Internet Explorer the element is visible whilst the popup
    // box asking the user for permission for the web page to
    // copy to the clipboard.
    //

    // Place in the top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = '0';

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of the white box if rendered for any reason.
    textArea.style.background = 'transparent';


    const url = window.location;
    textArea.value = url.origin + url.pathname + '#' + id;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg + ' URL: ' + textArea.value);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }

}
