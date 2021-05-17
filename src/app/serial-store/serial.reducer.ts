import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import * as SerialActions from './serial.actions';
import { ISerial, IFilter } from './serial.models';
import SerialState, { initializeState } from './serial.state';

export const serialFeatureKey = 'SerialState';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(SerialActions.GetFilteredSerials, (state: SerialState) => {
    return { ...state, serials: initialState.serials, }
  }),
  on(SerialActions.GetFilteredSerialsSuccess, (state: SerialState, { payload }) => { 
    return { ...state, serials: payload, };
  }),
);

export function SerialReducer( state: SerialState | undefined, action: Action): SerialState {
  return reducer(state, action);
}