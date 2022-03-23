import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationChartComponent} from "./sites/organization-chart/organization-chart.component";
import {StartComponent} from "./sites/start/start.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'chart', component: OrganizationChartComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
