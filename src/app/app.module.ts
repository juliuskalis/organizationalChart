import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationChartComponent } from './sites/organization-chart/organization-chart.component';
import { OrganizationChartBoxComponent } from './parts/organization-chart-box/organization-chart-box.component';
import { OrganizationChartChildComponent } from './parts/organization-chart-child/organization-chart-child.component';
import { OrganizationChartSettingsComponent } from './parts/organization-chart-settings/organization-chart-settings.component';
import { OrganizationChartToggleChildrenButtonContentComponent } from './parts/organization-chart-toggle-children-button-content/organization-chart-toggle-children-button-content.component';
import { SwitchComponent } from './parts/switch/switch.component';
import { StartComponent } from './sites/start/start.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faChevronUp,
  faDesktop,
  faMobileButton,
  faPlus,
  faMinus, faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { DeviceCheckComponent } from './sites/device-check/device-check.component';
import { SetBodyIdPipe } from './pipes/set-body-id.pipe';
import { OrganizationChartSettingsOptionsComponent } from './parts/organization-chart-settings-options/organization-chart-settings-options.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationChartComponent,
    OrganizationChartBoxComponent,
    OrganizationChartChildComponent,
    OrganizationChartSettingsComponent,
    OrganizationChartToggleChildrenButtonContentComponent,
    SwitchComponent,
    StartComponent,
    DeviceCheckComponent,
    SetBodyIdPipe,
    OrganizationChartSettingsOptionsComponent
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
      faMinus
    );
  }
}
