import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/modules/dashboard/components/dashboard/dashboard.component';
import { PoiTrackingComponent } from 'src/modules/tracking/components/poi-tracking/poi-tracking.component';

const routes: Routes = [
  { path: 'track', component: PoiTrackingComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
