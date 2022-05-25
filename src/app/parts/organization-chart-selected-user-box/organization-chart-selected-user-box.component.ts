import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";

@Component({
  selector: 'app-part-organization-chart-selected-user-box',
  templateUrl: './organization-chart-selected-user-box.component.html',
  styleUrls: ['./organization-chart-selected-user-box.component.scss']
})
export class OrganizationChartSelectedUserBoxComponent {

  @Input() user: any;

  displayContent: boolean = false;

  constructor(private organizationChartService: OrganizationChartService) {}

  scrollToId(val: string): void {
    this.organizationChartService.scrollToUserId(val);
  }

}
