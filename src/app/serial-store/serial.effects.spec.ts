import { TestBed } from "@angular/core/testing";
import { Observable, of, throwError } from "rxjs";
import { SerialEffects } from "./serial.effects";
import { SerialService } from "./serial.service";
import { provideMockActions } from '@ngrx/effects/testing';
import { GenresType, IFilter, ISerial, ISerialDetails } from "./serial.models";
import * as serialActions from './serial.actions';

const mockSerialDetails: ISerialDetails = {
    name: 'Narcos', id: 1234523, genres: [GenresType.ACTION],
}

const mockGenres: GenresType[] = [GenresType.ACTION];
const mockSerial: ISerial = {
    name: 'Narcos',
    _embedded: {
        show: {
            genres: mockGenres,
        }
    }
};

const mockFilteredSerials: ISerial[] = [mockSerial];

const mockFilter: IFilter = { 
    date: new Date('2021-05-18'), 
    genres: mockGenres 
};

describe('SerialEffects', () => {
    let actions$: Observable<any>;
    let effects: SerialEffects;
    let service: SerialService;

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            SerialEffects,
            provideMockActions(() => actions$),
            {
                provide: SerialService,
                useValue: jasmine.createSpyObj('service', ['getSerialDetails', 'getFilteredSerials']),
            },
        ]
    }));
    beforeEach(() => {
        effects = TestBed.get(SerialEffects);
        service = TestBed.get(SerialService);

    });

    describe('getSerialById$', () => {
        beforeEach(() => {
            actions$ = of(serialActions.GetSerialById);
            (service.getSerialDetails as jasmine.Spy).and.returnValue(of(mockSerialDetails));
        });

        it('should return results on success', () => {
            effects.getSerialById$.subscribe(action => {
                console.log(action);
                expect(action).toEqual(serialActions.GetSerialByIdSuccess({ serial: mockSerialDetails }));
            })
        });

        it('should return error on failed', () => {
            const error = { message: 'error message' };
            (service.getSerialDetails as jasmine.Spy).and.returnValue(throwError(error));

            effects.getSerialById$.subscribe(action => {
                expect(action.type).toEqual(serialActions.GetSerialByIdFailed({ error: error }).type);
            })
        });
    });

    describe('getFilteredSerials$', () => {

        beforeEach(() => {
            actions$ = of(serialActions.GetFilteredSerials({ filter: mockFilter}));
            (service.getFilteredSerials as jasmine.Spy).and.returnValue(of(mockFilteredSerials));
        });

        it('should return results on success', () => {
            effects.getFilteredSerials$.subscribe(action => {
                expect(action).toEqual(serialActions.GetFilteredSerialsSuccess({ payload: mockFilteredSerials, serialsGenres: mockGenres }));
            })
        });

        it('should return error on failed', () =>{
            const error = { message : 'error message'};
            (service.getFilteredSerials as jasmine.Spy).and.returnValue(throwError(error));

            effects.getSerialById$.subscribe(action => {
                expect(action.type).toEqual(serialActions.GetFilteredSerialsFailed({error: error}).type);
            })
        });
    });
});