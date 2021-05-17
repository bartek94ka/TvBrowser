import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISerial, IFilter } from './serial.models';

@Injectable({
  providedIn: 'root'
})
export class SerialService {
  private ApiURL: string = 'https://api.tvmaze.com/schedule/web?date=';
  constructor(private httpclient: HttpClient) {}

  getSerials(): Observable<ISerial[]> {
    return this.httpclient.get<ISerial[]>(this.ApiURL);
  }

  getFilteredSerials(filter: IFilter): Observable<ISerial[]> {
    const url = this.ApiURL + filter.date + '&country=US'
    return this.httpclient.get<ISerial[]>(url);
  }

  createSerial(payload: ISerial): Observable<ISerial> {
    return this.httpclient.post<ISerial>(this.ApiURL, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
