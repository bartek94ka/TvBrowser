import { Component, OnInit } from '@angular/core';
import { SerialFacade } from '../../serial-store/serial.facade';
import { ISerial, IFilter } from '../../serial-store/serial.models';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  title = 'TvBrowser';
  constructor(public serialFacade: SerialFacade) { }
  
  serials: ISerial[] = [];

  ngOnInit(): void  {
    const filter: IFilter = {
      date: '2021-05-16'
    }
    this.serialFacade.getFilteredSerials(filter);
    this.serialFacade.serials$.subscribe((data) => {
      this.serials = data;
      console.log(data);
    });
 }

}
