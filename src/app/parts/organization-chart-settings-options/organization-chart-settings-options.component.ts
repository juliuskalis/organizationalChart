import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-part-organization-chart-settings-options',
  templateUrl: './organization-chart-settings-options.component.html',
  styleUrls: ['./organization-chart-settings-options.component.scss']
})
export class OrganizationChartSettingsOptionsComponent implements OnDestroy, OnInit {

  @Input() displayMenu: boolean = true;
  @Input() layoutType: string = 'pc';
  height: number = 500;

  scaleMultiplier: number = 100;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private organizationChartService: OrganizationChartService) {
    this.initializeSubscriptions();
  }

  ngOnInit() {
    this.calcHeight(window.innerHeight);
  }

  initializeSubscriptions() {
    this.organizationChartService.scaleMultiplier.pipe(takeUntil(this.destroy)).subscribe((value: number) => {
      this.scaleMultiplier = value;
    });
  }

  resetScaleMultiplier() {
    this.organizationChartService.setScaleMultiplier(100);
  }

  setScaleMultiplier(val: boolean) {
    if (val && this.scaleMultiplier < 200) {
      this.organizationChartService.setScaleMultiplier(this.scaleMultiplier += 10);
    } else if (!val && this.scaleMultiplier > 10) {
      this.organizationChartService.setScaleMultiplier(this.scaleMultiplier -= 10);
    }
  }

  onResize(e: any) {
    this.calcHeight(e.target.innerHeight);
  }

  calcHeight(val: number) {
    const x = document.getElementById('oChartSettingsScrollBox')?.getClientRects()[0];
    console.log(x);
    if (this.layoutType === 'pc') {
      this.height = val - ((36 * 2) + 72);
      if (x && x.height < val) {
        this.height = x.height;
      }
    } else {
      this.height = val - ((12 * 2) + 72);
      if (x && x.height < val) {
        this.height = x.height;
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
