import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SerialFacade } from '../../../serial-store/serial.facade';
import { IFilter } from '../../../serial-store/models/serial.models';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-main-layout-content',
  templateUrl: './main-layout-content.component.html',
  styleUrls: ['./main-layout-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutContentComponent implements OnInit {
  serials$ = this.serialFacade.serials$;
  genresOptions$ = this.serialFacade.serialsGenres$
  error$ = this.serialFacade.error$;
  isLoading$ = this.serialFacade.isLoading$;
  
  constructor(private serialFacade: SerialFacade) { }

  ngOnInit(): void {
    const filter: IFilter = {
      date: new Date(),
      genres: [],
    }
    this.serialFacade.getFilteredSerials(filter);
  }

  onFilterChange(filter: IFilter): void {
    this.serialFacade.getFilteredSerials(filter);
  }
}
