import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SerialFacade } from 'src/app/serial-store/serial.facade';
import { ISerialDetails } from 'src/app/serial-store/serial.models';

@UntilDestroy()
@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialDetailsComponent implements OnInit {
  serialDetails: ISerialDetails;
  constructor(private route: ActivatedRoute, private serialFacade: SerialFacade) { }

  //load details from store
  //export card to common feature module
  ngOnInit(): void {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        this.serialFacade.getSerialDetailsById(params.id);
      });
    this.serialFacade.serialDetails$
      .pipe(untilDestroyed(this))
      .subscribe((serialDetails) => {
        this.serialDetails = serialDetails;
        console.log(this.serialDetails);
      });
  }
}
