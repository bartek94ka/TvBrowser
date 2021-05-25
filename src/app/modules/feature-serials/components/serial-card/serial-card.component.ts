import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ISerial, GenresType } from 'src/app/modules/serial-store/models/serial.models';

@Component({
  selector: 'app-serial-card',
  templateUrl: './serial-card.component.html',
  styleUrls: ['./serial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerialCardComponent {
  private _serial: ISerial;
  serialGenres : GenresType[] = [];
  serialId: string;

  @Input() set serial (serial: ISerial) {
    this._serial = serial;
    this.serialGenres = serial._embedded?.show?.genres ? serial._embedded?.show?.genres : [];
    this.serialId = serial._embedded?.show?.id as string;
  }
  get serial(): ISerial {
    return this._serial;
  }

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/details', this.serialId]);
  }
}
