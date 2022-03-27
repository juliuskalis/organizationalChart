import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-part-organization-chart-child',
  templateUrl: './organization-chart-child.component.html',
  styleUrls: ['./organization-chart-child.component.scss']
})
export class OrganizationChartChildComponent implements OnInit {

  @Input() orga: any[] | undefined = [];
  @Input() showName: boolean | undefined;
  @Input() showTitle: boolean | undefined;
  @Input() clipped: string | undefined;
  @Input() selectedUser: string | undefined;

  peopleNoChildren: any[] = [];
  peopleWithChildren: any[] = [];

  ngOnInit() {
    if(this.orga) {
      this.orga.forEach(o => { // for every element
        if (o.children?.length === undefined) { // when element has no children
          this.peopleNoChildren.push(o);
        } else { // when element has children
          this.peopleWithChildren.push(o);
        }
      });
    }
  }

  toggleChildren(id: string | null) {
    const child = this.peopleWithChildren.find(x => x.id === id); // toggles peopleWitchChildren displayChildren
    if(child) {
      child.displayChildren = !child.displayChildren;
    }
  }

  clipPerson(id: string | null) {
    console.log('id', id);
  }

}
