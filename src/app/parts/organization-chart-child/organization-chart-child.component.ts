import {Component, Input, OnInit} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {registerLocaleData} from "@angular/common";
import de from "@angular/common/locales/de";

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

  peopleWithoutChildren: any[] = [];
  peopleWithChildren: any[] = [];

  customStylesClass: string = '';
  parentBoxPadding: number = 0;

  constructor(private organizationChartService: OrganizationChartService) {
    registerLocaleData(de);
  }

  ngOnInit() {
    if (this.orga) {
      this.orga.forEach(o => { // for every element
        if (o.children?.length === undefined) { // when element has no children
          this.peopleWithoutChildren.push(o);
        } else { // when element has children
          this.peopleWithChildren.push(o);
        }
      });
      this.customStylesClass = this.getClassesForLayout(this.peopleWithoutChildren.length);
    }
  }

  toggleChildren(id: string | null) {
    if (id) {
      const scrollContainer = document.getElementById('scrollContainer');
      const parentBox = document.getElementById('parentBox-' + id)?.getBoundingClientRect();
      const box = document.getElementById(id)?.getBoundingClientRect();
      if (scrollContainer && parentBox && box) {
        if (this.orga?.find((x) => x.id === id).displayChildren) {
          this.parentBoxPadding = ((parentBox.width - 24) - box.width) / 2;
          scrollContainer.scrollTo({left: scrollContainer.scrollLeft - this.parentBoxPadding})
        } else {
          scrollContainer.scrollTo({left: scrollContainer.scrollLeft + this.parentBoxPadding})
        }
      }

      const child = this.peopleWithChildren.find(x => x.id === id); // toggles peopleWitchChildren displayChildren
      if (child) {
        child.displayChildren = !child.displayChildren;
      }
      this.organizationChartService.triggerViewChange();
    }
  }

  getClassesForLayout(val: number): string {
    let result = '';
    if (val !== 0) {
      if (val === 1) {
        result = 'beforeElement';
      } else {
        result = 'grid gap-4 p-4 border border-gray-400 ';
        if (val >= 6 && val < 12) {
          result += 'cGridColumns2';
        } else if (val >= 12 && val < 24) {
          result += 'cGridColumns3';
        } else if (val >= 24 && val < 48) {
          result += 'cGridColumns4';
        } else if (val >= 48 && val < 96) {
          result += 'cGridColumns5';
        } else if (val >= 96 && val < 192) {
          result += 'cGridColumns6';
        } else if (val >= 192 && val < 384) {
          result += 'cGridColumns7';
        } else if (val >= 384) {
          result += 'cGridColumns8';
        }
      }
    }
    return result;
  }

}
