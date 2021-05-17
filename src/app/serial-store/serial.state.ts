import { ISerial } from './serial.models';

export default class SerialState {
  serials: ISerial[] = [];
  // error: any;
}

export const initializeState = (): SerialState => {
  return { serials: [] };
};
