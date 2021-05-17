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
  airDate?: string;
  airTime?: string;
  airStamp?: string;
  runtime?: number;
  image?: IImage;
  summary?: string;
}

export interface IImage {
  medium?: string;
  original?: string;
}
