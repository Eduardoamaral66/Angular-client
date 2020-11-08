import { Component, OnInit } from '@angular/core';
import { PoiTrackingService } from 'src/modules/tracking/services/poi-tracking.service';
import { PointInterest } from '../../models/point-interest';
import { PointInterestService } from '../../services/point-interest.service';

@Component({
  selector: 'app-point-interest-list',
  templateUrl: './point-interest-list.component.html',
  styleUrls: ['./point-interest-list.component.scss']
})
export class PointInterestListComponent implements OnInit {

  displayedColumns: string[];
  points: PointInterest[];

  constructor(private pointInterestService: PointInterestService) {
    this.displayedColumns = ['name', 'radius', 'latitude', 'longitude'];
  }

  ngOnInit(): void {
    this.pointInterestService.findAll().subscribe(data => {
      this.points = data;
    });
  }

}
