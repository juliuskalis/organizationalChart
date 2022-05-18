import {Component, Input} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import de from "@angular/common/locales/de";

@Component({
  selector: 'app-part-organization-chart-child-length-box',
  templateUrl: './organization-chart-child-length-box.component.html',
  styleUrls: ['./organization-chart-child-length-box.component.scss']
})
export class OrganizationChartChildLengthBoxComponent {

  @Input() childLength: number = 0;

  constructor() {
    registerLocaleData( de );
  }

}
