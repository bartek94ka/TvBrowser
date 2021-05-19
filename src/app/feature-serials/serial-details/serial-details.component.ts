import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
