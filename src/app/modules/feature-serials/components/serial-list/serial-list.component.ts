import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ISerial } from 'src/app/modules/serial-store/models/serial.models';

@Component({
  selector: 'app-serial-list',
  templateUrl: './serial-list.component.html',
  styleUrls: ['./serial-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerialListComponent {
  @Input() serials: ISerial[];
}
