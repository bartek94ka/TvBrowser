import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import SerialState from './serial.state';
import * as serialActions from '../serial-store/serial.actions';
import * as selectors from './serial.selectors';
import { IFilter } from './serial.models';

@Injectable({
    providedIn: 'root'
  })
export class SerialFacade {
    serials$ = this.store.select(selectors.getFilteredSerials);

    constructor(private store: Store<{ serials: SerialState }>) { }

    getFilteredSerials(filter: IFilter): void {
        this.store.dispatch(serialActions.GetFilteredSerials({ filter }));
    }
}