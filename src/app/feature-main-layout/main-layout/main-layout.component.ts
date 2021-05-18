import { Component, OnInit } from '@angular/core';
import { SerialFacade } from '../../serial-store/serial.facade';
import { ISerial, IFilter, GenresType } from '../../serial-store/serial.models';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
@UntilDestroy()
export class MainLayoutComponent implements OnInit {
  serials: ISerial[] = [];
  //TODO: get genres from retrived serials
  genresOptions: string[] = [GenresType.ACTION, GenresType.ADVENTURE];
  constructor(public serialFacade: SerialFacade) { }

  ngOnInit(): void {
    const filter: IFilter = {
      date: new Date(),
    }
    this.serialFacade.getFilteredSerials(filter);
    this.serialFacade.serials$
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.serials = data;
      });
  }

  onFilterChange(filter: IFilter): void {
    this.serialFacade.getFilteredSerials(filter);
  }
}
