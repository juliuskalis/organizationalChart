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

@NgModule({
  declarations: [
    AppComponent,
    OrganizationChartComponent,
    OrganizationChartBoxComponent,
    OrganizationChartChildComponent,
    OrganizationChartSettingsComponent,
    OrganizationChartToggleChildrenButtonContentComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
