import { createAction, props } from '@ngrx/store';
import { ISerial, IFilter, GenresType } from './serial.models';

export const GetFilteredSerials = createAction(
  '[Serial] - Get Filtered Serials',
  props<{ filter: IFilter }>()
);

export const GetFilteredSerialsSuccess = createAction(
  '[Serial] - Success Get Filtered Serials',
  props<{ payload: ISerial[], serialsGenres: GenresType[] }>()
);

export const ErrorSerialAction = createAction('[Serial] - Error', props<Error>());
