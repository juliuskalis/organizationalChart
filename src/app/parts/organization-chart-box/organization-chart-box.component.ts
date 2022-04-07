import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-part-organization-chart-box',
  templateUrl: './organization-chart-box.component.html',
  styleUrls: ['./organization-chart-box.component.scss']
})
export class OrganizationChartBoxComponent {

  @Input() user: User | undefined;
  @Input() selectedUser: string | undefined;

  height: number = 100;

  constructor(private organizationChartService: OrganizationChartService) {}

  selectUser(userId: string | null | undefined) {
    if (userId) {
      if (this.selectedUser !== userId) {
        this.calcHeight(userId);
        this.organizationChartService.setSelectedUserId(userId);
      } else {
        this.organizationChartService.setSelectedUserId('null');
      }
    }
  }

  calcHeight(id: string) {
    const x = document.getElementById('chartBoxMoreInfo-' + id)?.getClientRects()[0];
    if (x) {
      this.height = x.height;
    }
  }

}
