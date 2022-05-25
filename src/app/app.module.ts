import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationChartComponent } from './sites/organization-chart/organization-chart.component';
import { OrganizationChartBoxComponent } from './parts/organization-chart-box/organization-chart-box.component';
import { OrganizationChartChildComponent } from './parts/organization-chart-child/organization-chart-child.component';
import { OrganizationChartSettingsComponent } from './parts/organization-chart-settings/organization-chart-settings.component';
import { SwitchComponent } from './parts/switch/switch.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faChevronUp,
  faDesktop,
  faMobileButton,
  faPlus,
  faMinus,
  faChevronDown,
  faUpDownLeftRight
} from "@fortawesome/free-solid-svg-icons";
import { DeviceCheckComponent } from './sites/device-check/device-check.component';
import { SetBodyIdPipe } from './pipes/set-body-id.pipe';
import { OrganizationChartSettingsOptionsComponent } from './parts/organization-chart-settings-options/organization-chart-settings-options.component';
import { LayoutTestPageComponent } from './sites/layout-test-page/layout-test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationChartComponent,
    OrganizationChartBoxComponent,
    OrganizationChartChildComponent,
    OrganizationChartSettingsComponent,
    SwitchComponent,
    DeviceCheckComponent,
    SetBodyIdPipe,
    OrganizationChartSettingsOptionsComponent,
    LayoutTestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDesktop,
      faMobileButton,
      faChevronUp,
      faChevronDown,
      faPlus,
      faMinus,
      faUpDownLeftRight
    );
  }
}
