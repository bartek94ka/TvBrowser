export interface IFilter {
  date: Date;
  genres?: string[];
}

export enum GenresType {
  CHILDREN = 'Children',
  SPORTS = 'Sports',
  SUPERNATURAL = 'Supernatural',
  COMEDY = 'Comedy',
  ADVENTURE = 'Adventure',
  SCIENCEFICTION = 'Science-Fiction',
  DRAMA = 'Drama',
  HORROR = 'Horror',
  THRILLER = 'Thriller',
  FAMILY = 'Family',
  MUSIC = 'Music',
  MEDICAL = 'Medical',
  ACTION = 'Action',
  ANIME = 'Anime',
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
  _embedded?: IEmbeddedSerial;
}

export interface IImage {
  medium?: string;
  original?: string;
}

export interface IEmbeddedSerial {
  show?: IShow;
}

export interface IShow {
  id?: string;
  genres?: GenresType[];
  summary?: string;
  name?: string;
}

export interface ISerialDetails {
  id?: number;
  url?: string;
  name?: string;
  genres?: GenresType[];
  averageRuntime?: number;
  premiered?: Date;
  officialSite?: string;
  rating?: IRating;
  image?: IImage;
  summary?: string;
}

export interface IRating {
  average?: number;
}