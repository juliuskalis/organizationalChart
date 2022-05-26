import {Component, Input} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {loadItemsInAndOut, toggleHeightAndItemFade} from "../../animations/animations";

@Component({
  selector: 'app-part-organization-chart-selected-user-box',
  templateUrl: './organization-chart-selected-user-box.component.html',
  styleUrls: ['./organization-chart-selected-user-box.component.scss'],
  animations: [toggleHeightAndItemFade, loadItemsInAndOut]
})
export class OrganizationChartSelectedUserBoxComponent {

  @Input() user: any;

  displayContent: boolean = false;
  displayContentBlocked: boolean = false;

  constructor(private organizationChartService: OrganizationChartService) {}

  scrollToId(val: string): void {
    this.organizationChartService.scrollToUserId(val);
  }

  toggleDisplayContent() {
    if (!this.displayContentBlocked) {
      this.displayContent = !this.displayContent;
    }
    this.displayContentBlocked = true;
  }

}
