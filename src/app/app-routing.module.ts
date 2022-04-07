import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationChartComponent} from "./sites/organization-chart/organization-chart.component";
import {DeviceCheckComponent} from "./sites/device-check/device-check.component";
import {LayoutTestPageComponent} from "./sites/layout-test-page/layout-test-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  { path: 'chart', component: OrganizationChartComponent },
  { path: 'device', component: DeviceCheckComponent },
  { path: 't', component: LayoutTestPageComponent },
  { path: '**', redirectTo: 'chart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
