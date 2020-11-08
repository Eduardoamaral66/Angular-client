import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PointInterest } from '../models/point-interest';

@Injectable({
  providedIn: 'root'
})
export class PointInterestService {
  private pointInterestUrl: string;

  constructor(private http: HttpClient) {
    this.pointInterestUrl = 'http://localhost:8080/poi/list';
  }

  public findAll(): Observable<PointInterest[]> {
    return this.http.get<PointInterest[]>(this.pointInterestUrl);
  }
}
