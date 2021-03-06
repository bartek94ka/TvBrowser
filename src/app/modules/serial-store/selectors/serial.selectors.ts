import { createFeatureSelector, createSelector } from '@ngrx/store';
import SerialState from '../states/serial.state';

export const serialsSelector = createFeatureSelector<SerialState>('state');

export const getFilteredSerials = createSelector(serialsSelector, state => state.serials);

export const getFilteredSerialsGenres = createSelector(serialsSelector, state => state.serialGenres);

export const getSerialDetails = createSelector(serialsSelector, state => state.serialDetails);

export const getError = createSelector(serialsSelector, state => state.error);

export const getIsLoading = createSelector(serialsSelector, state => state.isLoading);
