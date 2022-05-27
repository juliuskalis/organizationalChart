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
  displayContentAnimation: boolean = false;

  constructor(private organizationChartService: OrganizationChartService) {}

  scrollToId(val: string): void {
    this.organizationChartService.scrollToUserId(val);
  }

  toggleDisplayContent() {
    if (!this.displayContentAnimation) {
      this.displayContent = !this.displayContent;
    }
    this.displayContentAnimation = true;
  }

  onAnimationEnd() {
    this.displayContentAnimation = false;
    this.addsVerticalScrollbarIfNecessary('selectedUserBoxContent', 36);
  }

  addsVerticalScrollbarIfNecessary(id: string, margin: number = 0): void {
    const element = document.getElementById(id);
    if (element) {
      const windowHeight = window.innerHeight;
      let boxHeight = element.getBoundingClientRect().height + margin;
      if (windowHeight < boxHeight) {
        element.style.height = windowHeight - margin + 'px';
        element.style.overflow = 'auto';
      } else {
        element.style.height = 'auto';
        element.style.overflow = 'hidden';
      }
    }
  }

}
