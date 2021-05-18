import { Component, OnInit, Input } from '@angular/core';
import { ISerial } from 'src/app/serial-store/serial.models';

@Component({
  selector: 'app-serial-card',
  templateUrl: './serial-card.component.html',
  styleUrls: ['./serial-card.component.scss']
})
export class SerialCardComponent implements OnInit {
  @Input() serial: ISerial = {};

  ngOnInit(): void {
  }

}
