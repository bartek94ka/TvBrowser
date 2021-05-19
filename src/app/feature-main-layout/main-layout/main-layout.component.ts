import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SerialFacade } from '../../serial-store/serial.facade';
import { ISerial, IFilter, GenresType } from '../../serial-store/serial.models';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@UntilDestroy()
export class MainLayoutComponent implements OnInit {
  serials: ISerial[] = [];
  genresOptions: string[] = [];
  constructor(private serialFacade: SerialFacade, private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
    const filter: IFilter = {
      date: new Date(),
    }
    this.serialFacade.getFilteredSerials(filter);
    this.serialFacade.serials$
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.serials = data;
        this.cdr.markForCheck();
      });
    this.serialFacade.serialsGenres$
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.genresOptions = data;
        this.cdr.markForCheck();
      });
  }

  onFilterChange(filter: IFilter): void {
    this.serialFacade.getFilteredSerials(filter);
  }
}
