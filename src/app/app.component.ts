import { Component, OnInit } from '@angular/core';
import { SerialFacade } from './serial-store/serial.facade';
import { IFilter } from './serial-store/serial.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TvBrowser';
  
  constructor(public serialFacade: SerialFacade) { }

  ngOnInit(): void  {
    const filter: IFilter = {
      date: '2021-05-16'
    }
    this.serialFacade.getFilteredSerials(filter);
    this.serialFacade.serials$.subscribe((data) => {
      console.log(data);
    });
 }
}