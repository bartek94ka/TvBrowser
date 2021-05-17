import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './serial.reducer';
import SerialState from './serial.state';

export const serialsSelector = createFeatureSelector<SerialState>('state');//fromStore.serialFeatureKey);

export const getFilteredSerials = createSelector(serialsSelector, state => state.serials);
