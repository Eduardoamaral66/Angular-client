import { Component, OnInit } from '@angular/core';
import { History } from '../../models/history';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  displayedColumns: string[];
  history: History[];

  constructor(private service: HistoryService) {
    this.displayedColumns = ['licensePlate', 'date', 'velocity', 'latitude', 'longitude', 'ignition'];
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      this.history = data;
    });
  }

}
