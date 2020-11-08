import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoiTrackingComponent } from 'src/modules/tracking/components/poi-tracking/poi-tracking.component';
import { PoiTrackingService } from 'src/modules/tracking/services/poi-tracking.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/modules/dashboard/components/dashboard/dashboard.component';
import { PointInterestListComponent } from 'src/modules/point-interest/components/point-interest-list/point-interest-list.component';
import { HistoryListComponent } from 'src/modules/history/components/history-list/history-list.component';
import { YesNoPipe } from './shared/pipe/yes-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoiTrackingComponent,
    DashboardComponent,
    PointInterestListComponent,
    HistoryListComponent,
    YesNoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PoiTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
