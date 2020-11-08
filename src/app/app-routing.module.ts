import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/modules/dashboard/components/dashboard/dashboard.component';
import { HistoryListComponent } from 'src/modules/history/components/history-list/history-list.component';
import { PointInterestListComponent } from 'src/modules/point-interest/components/point-interest-list/point-interest-list.component';
import { PoiTrackingComponent } from 'src/modules/tracking/components/poi-tracking/poi-tracking.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'track', component: PoiTrackingComponent },
  { path: 'pointInterest', component: PointInterestListComponent },
  { path: 'history', component: HistoryListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
