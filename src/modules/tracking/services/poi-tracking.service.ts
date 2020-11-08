import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoiTracking } from '../models/poi-tracking';
import { Filter } from '../components/poi-tracking/poi-tracking.component';

@Injectable({
  providedIn: 'root'
})
export class PoiTrackingService {

  private trackUrl: string;

  constructor(private http: HttpClient) {
    this.trackUrl = 'http://localhost:8080/poi_tracking/track';
  }

  public trackPoi(filter: Filter): Observable<any> {
    return this.http.post<Filter>(this.trackUrl, filter);
  }
}
