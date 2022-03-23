import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-part-organization-chart-box',
  templateUrl: './organization-chart-box.component.html',
  styleUrls: ['./organization-chart-box.component.scss']
})
export class OrganizationChartBoxComponent {

  @Input() item: any | undefined;

}
