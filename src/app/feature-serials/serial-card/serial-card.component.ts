import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ISerial, GenresType } from 'src/app/serial-store/serial.models';

@Component({
  selector: 'app-serial-card',
  templateUrl: './serial-card.component.html',
  styleUrls: ['./serial-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerialCardComponent {
  private _serial: ISerial;
  serialGenres : GenresType[] = [];

  @Input() set serial (serial: ISerial) {
    this._serial = serial;
    this.serialGenres.length
    this.serialGenres = serial._embedded?.show?.genres ? serial._embedded?.show?.genres : [];
  }
  get serial(): ISerial {
    return this._serial;
  }

  constructor(private router: Router) {}

  navigateToDetails(serialId?: number) {
    this.router.navigate(['/details', serialId]);
  }
}
