import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SerialActions from './serial.actions';
import { SerialService } from './serial.service';
import { GenresType, IFilter, ISerial } from './serial.models';

@Injectable()
export class SerialEffects {
  constructor(private serialService: SerialService, private action$: Actions) { }

  GetFilteredSerials$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(SerialActions.GetFilteredSerials),
      mergeMap(action =>
        this.serialService.getFilteredSerials(action.filter).pipe(
          map((data: ISerial[]) => {
            return SerialActions.GetFilteredSerialsSuccess(
              { 
                payload: this.getFilteredSerialsByCategories(data, action.filter), 
                serialsGenres: this.getUniqueSerialsGenres(data),
              });
          }),
          catchError((error: Error) => {
            return of(SerialActions.ErrorSerialAction(error));
          })
        )
      )
    )
  );

  private getFilteredSerialsByCategories(serials: ISerial[], filter: IFilter): ISerial[] {
    const filteredSerials: ISerial[] = [];
    if(filter.genres === undefined || filter.genres?.length === 0){
      return serials;
    }
    serials.map((serial) => {
      const genres = serial?._embedded?.show?.genres
      if(genres?.some((genre) => filter.genres?.includes(genre)) === true) {
        filteredSerials.push(serial);
      }
    });
    return filteredSerials;
  }


  private getUniqueSerialsGenres(serials: ISerial[]): GenresType[] {
    const genresCollections = serials.map(serial => { return serial._embedded?.show?.genres });
    const uniqueGenres: GenresType[] = [];
    genresCollections.forEach((collection) => {
      collection?.forEach((item) => {
        if (uniqueGenres.findIndex((genre) => genre === item) === -1) {
          uniqueGenres.push(item);
        }
      });
    });
    return uniqueGenres.sort();
  }
}
