import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-part-organization-chart-toggle-children-button-content',
  templateUrl: './organization-chart-toggle-children-button-content.component.html',
  styleUrls: ['./organization-chart-toggle-children-button-content.component.scss']
})
export class OrganizationChartToggleChildrenButtonContentComponent {

  @Input() item: any | undefined;

}
