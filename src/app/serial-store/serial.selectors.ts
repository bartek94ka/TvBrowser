import { createFeatureSelector, createSelector } from '@ngrx/store';
import SerialState from './serial.state';

export const serialsSelector = createFeatureSelector<SerialState>('state');//fromStore.serialFeatureKey);

export const getFilteredSerials = createSelector(serialsSelector, state => state.serials);

export const getFilteredSerialsGenres = createSelector(serialsSelector, state => state.serialGenres);

export const getSerialDetails = createSelector(serialsSelector, state => state.serialDetails);
