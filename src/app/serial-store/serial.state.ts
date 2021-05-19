import { GenresType, ISerial } from './serial.models';

export default class SerialState {
  serials: ISerial[] = [];
  serialGenres: GenresType[] = [];
}

export const initializeState = (): SerialState => {
  return { serials: [], serialGenres: [] };
};
