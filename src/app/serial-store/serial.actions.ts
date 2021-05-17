import { createAction, props } from '@ngrx/store';
import { ISerial, IFilter } from './serial.models';

export const GetFilteredSerials = createAction(
  '[Serial] - Get Filtered Serials',
  props<{ filter: IFilter }>()
);

export const GetFilteredSerialsSuccess = createAction(
  '[Serial] - Success Get Filtered Serials',
  props<{ payload: ISerial[] }>()
);

export const ErrorSerialAction = createAction('[Serial] - Error', props<Error>());
