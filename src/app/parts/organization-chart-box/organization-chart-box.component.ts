import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";

@Component({
  selector: 'app-part-organization-chart-box',
  templateUrl: './organization-chart-box.component.html',
  styleUrls: ['./organization-chart-box.component.scss']
})
export class OrganizationChartBoxComponent {

  @Input() item: any | undefined;

  constructor(private organizationChartService: OrganizationChartService) {}

  selectUser(userId: string | null) {
    this.organizationChartService.setSelectedUserId(userId);
  }

}
