import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SerialFacade } from 'src/app/modules/serial-store/serial.facade';

@UntilDestroy()
@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialDetailsComponent implements OnInit {
  serial$ = this.serialFacade.serialDetails$;
  error$ = this.serialFacade.error$;
  isLoading$ = this.serialFacade.isLoading$;

  constructor(
    private route: ActivatedRoute,
    private serialFacade: SerialFacade) { }

  ngOnInit(): void {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        this.serialFacade.getSerialDetailsById(params.id);
      });
  }
}
