import { GenresType, ISerial, ISerialDetails } from './serial.models';

export default class SerialState {
  serials: ISerial[] = [];
  serialGenres: GenresType[] = [];
  serialDetails: ISerialDetails = {};
  isLoading: boolean = false;
  error: any = {};
}

export const initializeState = (): SerialState => {
  return { serials: [], serialGenres: [], serialDetails: {}, error: {}, isLoading: false };
};
