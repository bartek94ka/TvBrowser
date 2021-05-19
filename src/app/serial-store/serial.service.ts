import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISerial, IFilter } from './serial.models';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SerialService {
  private ApiURL: string = 'https://api.tvmaze.com/schedule/web?date=';
  constructor(private httpclient: HttpClient) { }

  getFilteredSerials(filter: IFilter): Observable<ISerial[]> {
    const url = this.ApiURL + formatDate(filter.date, 'yyyy-MM-dd', 'en-GB') + '&country=US'
    return this.httpclient.get<ISerial[]>(url);
  }
}
