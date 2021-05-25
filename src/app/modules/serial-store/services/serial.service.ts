import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISerial, IFilter, ISerialDetails } from '../models/serial.models';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SerialService {
  private urlRoot: string = 'https://api.tvmaze.com';
  constructor(private httpClient: HttpClient) { }

  getFilteredSerials(filter: IFilter): Observable<ISerial[]> {
    const url = this.urlRoot + '/schedule/web?date=' + 
      formatDate(filter.date, 'yyyy-MM-dd', 'en-GB') + '&country=US';
    return this.httpClient.get<ISerial[]>(url);
  }

  getSerialDetails(serialId: string): Observable<ISerial> {
    const url = this.urlRoot + '/shows/' + serialId;
    return this.httpClient.get<ISerialDetails>(url);
  }
}
