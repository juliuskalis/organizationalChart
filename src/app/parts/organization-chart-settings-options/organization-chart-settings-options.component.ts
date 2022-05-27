import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {OrganizationChartService} from "../../services/organization-chart.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-part-organization-chart-settings-options',
  templateUrl: './organization-chart-settings-options.component.html',
  styleUrls: ['./organization-chart-settings-options.component.scss']
})
export class OrganizationChartSettingsOptionsComponent implements OnInit, OnDestroy {

  @Input() displayMenu: boolean = true;
  @Input() layoutType: string = 'pc';

  height: number = 500;
  innerHeight: number = window.innerHeight;

  scaleMultiplier: number = 100;
  scrollOnPC: boolean = false;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private organizationChartService: OrganizationChartService) {
    this.initializeSubscriptions();
  }

  ngOnInit() {
    if (this.layoutType === 'pc') {
      this.calcHeight(window.innerHeight, 76);
    } else {
      this.calcHeight(window.innerHeight);
    }
  }

  initializeSubscriptions() {
    this.organizationChartService.scaleMultiplier.pipe(takeUntil(this.destroy)).subscribe((value: number) => {
      this.scaleMultiplier = value;
    });
    this.organizationChartService.scrollOnPC.pipe(takeUntil(this.destroy)).subscribe((val: boolean) => {
      this.scrollOnPC = val;
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
    if (this.innerHeight !== e.target.innerHeight) {
      this.calcHeight(e.target.innerHeight);
    }
  }

  calcHeight(val: number, extraElementHeight: number = 0) {
    this.innerHeight = val;
    const x = document.getElementById('oChartSettingsScrollBox')?.getClientRects()[0];
    if (!x) {return}
    const elementHeight = x.height + extraElementHeight;
    const maxHeight = val - (this.layoutType === 'pc' ? ((36 * 2) + 72) : ((12 * 2) + 72));

    if (maxHeight > elementHeight) {
      this.height = elementHeight;
      this.setOverflow(true);
    } else {
      this.height = maxHeight;
      this.setOverflow(false);
    }
  }

  setOverflow(bool: boolean) {
    const o = document.getElementById('oChartSettingsOverflow');
    if(o) {
      if (bool) {
        o.style.overflow = 'hidden';
      } else {
        o.style.overflow = this.layoutType === 'pc' ? 'overlay' : 'auto';
      }
    }
  }

  toggleScrollOnPC() {
    if (this.layoutType === 'pc') {
      this.scrollOnPC = !this.scrollOnPC;
      this.organizationChartService.setScrollOnPC(this.scrollOnPC);
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

}
