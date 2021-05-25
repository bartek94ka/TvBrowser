import { createAction, props } from '@ngrx/store';
import { ISerial, IFilter, GenresType, ISerialDetails } from './serial.models';

export const GetFilteredSerials = createAction(
  '[Serial] - Get Filtered Serials',
  props<{ filter: IFilter }>()
);

export const GetFilteredSerialsSuccess = createAction(
  '[Serial] - Get Filtered Serials Success',
  props<{ payload: ISerial[], serialsGenres: GenresType[] }>()
);

export const GetFilteredSerialsFailed = createAction(
  '[Serial] - Get Filtered Serials Failed',
  props<{ error: any }>()
);

export const GetSerialById = createAction(
  '[Serial] - Get Serial By Id',
  props<{ serialId: string }>()
);

export const GetSerialByIdSuccess = createAction(
  '[Serial] - Get Serial By Id Success',
  props<{ serial: ISerialDetails }>()
);

export const GetSerialByIdFailed = createAction(
  '[Serial] - Get Serial By Id Failed',
  props<{ error: any }>()
);

export const ErrorSerialAction = createAction('[Serial] - Error', props<Error>());
