import { Action, createReducer, on } from '@ngrx/store';
import * as SerialActions from '../actions/serial.actions';
import SerialState, { initializeState } from '../states/serial.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(SerialActions.GetFilteredSerials, (state: SerialState) => {
    return { ...state, serials: [], error: {}, isLoading: true }
  }),
  on(SerialActions.GetFilteredSerialsSuccess, (state: SerialState, { payload, serialsGenres }) => { 
    return { ...state, serials: payload, serialGenres: serialsGenres, error: {}, isLoading: false };
  }),
  on(SerialActions.GetFilteredSerialsFailed, (state: SerialState, { error }) => { 
    return { ...state, serials: [], serialGenres: [], error: error, isLoading: false };
  }),
  on(SerialActions.GetSerialById, (state: SerialState) => {
    return { ...state, serialDetails: {}, error: {}, isLoading: true };
  }),
  on(SerialActions.GetSerialByIdSuccess, (state: SerialState, { serial }) => {
    return { ...state, serialDetails: serial, error: {}, isLoading: false };
  }),
  on(SerialActions.GetSerialByIdFailed, (state: SerialState, { error }) => {
    return { ...state, serialDetails: {}, error: error, isLoading: false };
  }),
);

export function SerialReducer( state: SerialState | undefined, action: Action): SerialState {
  return reducer(state, action);
}

