import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ISerial } from 'src/app/serial-store/serial.models';
// import { ISerial } from 'src/app/serial-store/serial.models';

@Component({
  selector: 'app-serial-list',
  templateUrl: './serial-list.component.html',
  styleUrls: ['./serial-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerialListComponent {
  @Input() serials: ISerial[] = [];
}
