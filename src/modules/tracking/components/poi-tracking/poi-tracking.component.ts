import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { PoiTracking } from '../../models/poi-tracking';
import { PoiTrackingService } from '../../services/poi-tracking.service';

export interface Filter {
  poiName: string;
  licensePlate: string;
  initDate: Date;
  endDate: Date;
}

interface PoiTrackingSummedUp {
  licensePlate: string;
  poiName: string;
  time: number;
  formatedTime?: string;
}
@Component({
  selector: 'app-poi-tracking',
  templateUrl: './poi-tracking.component.html',
  styleUrls: ['./poi-tracking.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PoiTrackingComponent implements OnInit {

  filter: Filter;

  poiTrackings: PoiTracking[];
  displayedColumnsDetailed: string[];

  poiTrackingsSummedUp: PoiTrackingSummedUp[];
  displayedColumns: string[];

  constructor(private poiTrackingService: PoiTrackingService) {
    this.displayedColumns = ['licensePlate', 'poiName', 'time'];
    this.displayedColumnsDetailed = ['licensePlate', 'poiName', 'firstDateTime', 'lastDateTime', 'time'];
  }

  ngOnInit() {
    this.filter = {
      licensePlate: "",
      poiName: "",
      initDate: undefined,
      endDate: undefined,
    }

    this.search();
  }

  onSubmit() {
    this.search();
  }

  private search() {
    this.poiTrackingService.trackPoi(this.filter).subscribe(data => {
      this.poiTrackings = data;
      this.summedUp();

      this.poiTrackings.forEach(item => {
        item.formatedTime = this.formatTime(item.time);
      });
      this.poiTrackingsSummedUp.forEach(item => {
        item.formatedTime = this.formatTime(item.time);
      });
    });
  }

  private summedUp() {
    var found: PoiTrackingSummedUp[] = [];
    this.poiTrackingsSummedUp = [];

    this.poiTrackings.forEach(item => {
      found = this.poiTrackingsSummedUp.filter(
        r => r.licensePlate === item.licensePlate && r.poiName === item.poiName
      )
      if (found[0]) {
        found[0].time += item.time;
      } else {
        this.poiTrackingsSummedUp.push({
          licensePlate: item.licensePlate,
          poiName: item.poiName,
          time: item.time
        })
      }
    });
  }

  updateInitDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.filter.initDate = event.value;
  }
  updateEndDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.filter.endDate = event.value;
  }

  private formatTime(number): string {
    var hours = Math.floor(number / 60 / 60);
    var minutes = Math.floor(number / 60) - (hours * 60);
    var seconds = number % 60;
    return this.twoDigits(hours) + ':' + this.twoDigits(minutes) + ':' + this.twoDigits(seconds);
  }

  private twoDigits(number): string {
    if (number < 10) {
      return ("0" + number).slice(-2);
    }
    return number;
  }
}
