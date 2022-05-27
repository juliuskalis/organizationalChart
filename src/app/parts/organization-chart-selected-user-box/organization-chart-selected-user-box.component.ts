import {Component, Input, OnInit} from '@angular/core';
import {slideInAndOut, slideInAndOutPhone, slideInAndOutReversed} from "../../animations/animations";

@Component({
  selector: 'app-part-organization-chart-selected-user-box',
  templateUrl: './organization-chart-selected-user-box.component.html',
  styleUrls: ['./organization-chart-selected-user-box.component.scss'],
  animations: [slideInAndOut, slideInAndOutReversed, slideInAndOutPhone]
})
export class OrganizationChartSelectedUserBoxComponent implements OnInit{

  @Input() user: any;
  @Input() layoutType: string = '';
  @Input() selectedUserId: string | undefined;
  @Input() selectedUser: any;

  selectedUserBoxLayout: string = 'default';

  ngOnInit(): void {
    this.onResize();
  }

  onResize() {
    const x = window.innerWidth;
    if (x >= 1280) {
      this.selectedUserBoxLayout = 'default';
    } else {
      this.selectedUserBoxLayout = 'reversed';
    }
  }

}
