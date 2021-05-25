import { GetFilteredSerials, GetFilteredSerialsFailed, GetFilteredSerialsSuccess, GetSerialById, GetSerialByIdFailed, GetSerialByIdSuccess } from "../actions/serial.actions";
import { GenresType, IFilter, ISerial, ISerialDetails } from "../models/serial.models";
import { SerialReducer } from "./serial.reducer";
import SerialState, { initializeState } from '../states/serial.state';

function getDefaultSerial(name: string): ISerial {
    return { name: name };
}

function getDefaultSerialDetails(name: string): ISerialDetails {
    return { name: name };
}

describe('SerialReducer', () => {
    describe('GetFilteredSerials', () => {
        it('should set isLoading to true', () => {
            const filter: IFilter = {
                date: new Date(),
            }
            const action = GetFilteredSerials({ filter: filter });

            const expectedResult = initializeState();
            expectedResult.isLoading = true;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GetFilteredSerialsSuccess', () => {
        it('should return expected values', () => {
            const serials: ISerial[] = [
                getDefaultSerial('Lupin'),
                getDefaultSerial('Narcos')
            ];
            const genres: GenresType[] = [GenresType.ACTION];
            const action = GetFilteredSerialsSuccess({ payload: serials, serialsGenres: genres });

            const expectedResult = initializeState();
            expectedResult.isLoading = false;
            expectedResult.serials = serials;
            expectedResult.serialGenres = genres;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GetFilteredSerialsFailed', () => {
        it('should return expected values', () => {
            const error = { message: 'error message' };
            const action = GetFilteredSerialsFailed({ error });

            const expectedResult = initializeState();
            expectedResult.isLoading = false;
            expectedResult.error = error;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GetSerialById', () => {
        it('should return expected values', () => {
            const serialId = '493291';
            const action = GetSerialById({ serialId });

            const expectedResult = initializeState();
            expectedResult.isLoading = true;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GetSerialByIdSuccess', () => {
        it('should return expected values', () => {
            const serial = getDefaultSerialDetails('Narcos');
            const action = GetSerialByIdSuccess({ serial });

            const expectedResult = initializeState();
            expectedResult.serialDetails = serial;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GetSerialByIdFailed', () => {
        it('should return expected values', () => {
            const error = { message: 'error message' };
            const action = GetSerialByIdFailed({ error });

            const expectedResult = initializeState();
            expectedResult.error = error;

            const result = SerialReducer(new SerialState(), action);
            expect(result).toEqual(expectedResult);
        });
    });
})
