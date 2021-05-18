export interface IFilter {
  date?: string;
  genres?: GenresType[];
}

export enum GenresType {
  CHILDREN = 'Children',
  SPORTS = 'Sports',
}

export interface ISerial {
  id?: number;
  url?: string;
  name?: string;
  season?: number;
  type?: string;
  airdate?: string;
  airtime?: string;
  airstamp?: Date;
  runtime?: number;
  image?: IImage;
  summary?: string;
}

export interface IImage {
  medium?: string;
  original?: string;
}
