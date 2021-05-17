import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SerialActions from './serial.actions';
import { SerialService } from './serial.service';
import { ISerial } from './serial.models';

@Injectable()
export class SerialEffects {
  constructor(private serialService: SerialService, private action$: Actions) { }

  GetFilteredSerials$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(SerialActions.GetFilteredSerials),
      mergeMap(action =>
        this.serialService.getFilteredSerials(action.filter).pipe(
          map((data: ISerial[]) => {
            return SerialActions.GetFilteredSerialsSuccess({ payload: data });
          }),
          catchError((error: Error) => {
            return of(SerialActions.ErrorSerialAction(error));
          })
        )
      )
    )
  );
}
