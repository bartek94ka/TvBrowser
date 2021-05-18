import { Component, OnInit, Input } from '@angular/core';
import { ISerial } from 'src/app/serial-store/serial.models';
// import { ISerial } from 'src/app/serial-store/serial.models';

@Component({
  selector: 'app-serial-list',
  templateUrl: './serial-list.component.html',
  styleUrls: ['./serial-list.component.scss'],
})
export class SerialListComponent implements OnInit {

  @Input() serials: ISerial[] = [];
  
  constructor() { }

  ngOnInit(): void {
    console.log('init');
  }

}
