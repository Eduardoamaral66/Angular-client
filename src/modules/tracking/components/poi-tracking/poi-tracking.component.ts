import { Component, OnInit } from '@angular/core';
import { PoiTracking } from '../../models/poi-tracking';
import { PoiTrackingFilter } from '../../models/poi-tracking-filter';
import { PoiTrackingService } from '../../services/poi-tracking.service';

@Component({
  selector: 'app-poi-tracking',
  templateUrl: './poi-tracking.component.html',
  styleUrls: ['./poi-tracking.component.scss']
})
export class PoiTrackingComponent implements OnInit {

  poiTrackings: PoiTracking[];
  displayedColumns: string[];

  constructor(private poiTrackingService: PoiTrackingService) {
    this.displayedColumns = ['licensePlate', 'poiName', 'firstDateTime', 'lastDateTime', 'time'];
  }

  ngOnInit() {
    const filter = new PoiTrackingFilter();
    filter.licensePlate = "TESTE001";
    filter.poiName = "";
    filter.initDate = undefined;
    filter.endDate = undefined;

    this.poiTrackingService.trackPoi(filter).subscribe(data => {
      this.poiTrackings = data;

      this.poiTrackings.forEach(item => {
        var hours = Math.floor(item.time / 60 / 60);
        var minutes = Math.floor(item.time / 60) - (hours * 60);
        var seconds = item.time % 60;
        item.formatedTime = hours + ':' + minutes + ':' + seconds;
      })
    });
  }

}
