import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { History } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historyUrl: string;

  constructor(private http: HttpClient) {
    this.historyUrl = 'http://localhost:8080/position/list';
  }

  public findAll(): Observable<History[]> {
    return this.http.get<History[]>(this.historyUrl);
  }
}
