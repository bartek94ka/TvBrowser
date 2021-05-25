import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SerialFacade } from 'src/app/modules/serial-store/serial.facade';
import { ISerialDetails } from 'src/app/modules/serial-store/serial.models';

@UntilDestroy()
@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialDetailsComponent implements OnInit {
  serial: ISerialDetails;

  constructor(
    private route: ActivatedRoute,
    private serialFacade: SerialFacade,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        this.serialFacade.getSerialDetailsById(params.id);
      });
    this.serialFacade.serialDetails$
      .pipe(untilDestroyed(this))
      .subscribe((serialDetails) => {
        this.serial = serialDetails;
        this.cdr.markForCheck();
      });
    this.serialFacade.error$
      .pipe(untilDestroyed(this))
      .subscribe((error) => {
        //TODO: handle error by display some toast or text
      });
    this.serialFacade.isLoading$
      .pipe(untilDestroyed(this))
      .subscribe((error) => {
        //TODO: handle isLoading to display some spinner
      });
  }
}
