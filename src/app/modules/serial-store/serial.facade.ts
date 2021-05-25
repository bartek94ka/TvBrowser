import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import SerialState from './states/serial.state';
import * as serialActions from './actions/serial.actions';
import * as selectors from './selectors/serial.selectors';
import { IFilter } from './models/serial.models';

@Injectable({
    providedIn: 'root'
})
export class SerialFacade {
    serials$ = this.store.select(selectors.getFilteredSerials);
    serialsGenres$ = this.store.select(selectors.getFilteredSerialsGenres);
    serialDetails$ = this.store.select(selectors.getSerialDetails);
    error$ = this.store.select(selectors.getError);
    isLoading$ = this.store.select(selectors.getIsLoading);

    constructor(private store: Store<{ serials: SerialState }>) { }

    getFilteredSerials(filter: IFilter): void {
        this.store.dispatch(serialActions.GetFilteredSerials({ filter }));
    }

    getSerialDetailsById(serialId: string): void {
        this.store.dispatch(serialActions.GetSerialById({ serialId }));
    }
}