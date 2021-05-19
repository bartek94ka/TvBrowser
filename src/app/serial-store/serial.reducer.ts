import { Action, createReducer, on } from '@ngrx/store';
import * as SerialActions from './serial.actions';
import SerialState, { initializeState } from './serial.state';

export const serialFeatureKey = 'SerialState';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(SerialActions.GetFilteredSerials, (state: SerialState) => {
    return { ...state, serials: [], }
  }),
  on(SerialActions.GetFilteredSerialsSuccess, (state: SerialState, { payload, serialsGenres }) => { 
    return { ...state, serials: payload, serialGenres: serialsGenres };
  }),
  on(SerialActions.GetSerialById, (state: SerialState) => {
    return { ...state, serialDetails: {} };
  }),
  on(SerialActions.GetSerialByIdSuccess, (state: SerialState, { serial }) => {
    return { ...state, serialDetails: serial };
  }),
);

export function SerialReducer( state: SerialState | undefined, action: Action): SerialState {
  return reducer(state, action);
}

