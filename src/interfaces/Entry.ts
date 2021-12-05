/**
 * Generic interface used in the app for Movies ant TV shows
 */
export interface Entry {
    id: string;
    title: string;
    contentType: string;
    posterURL: string;
    backDropURL: string;
    overview: string;
    year: string;
}

/**
 * Interface for the Movie item provided by the API
 */
export interface Movie {
    id: string;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
}

/**
 * Interface for the TV Show item provided by the API
 */
export interface TVShow {
    id: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    first_air_date: string;
}

/**
 * API Response
 */
export interface RawEntriesData {
    results: Movie[] | TVShow[];
    page: number;
    total_pages: number;
}

/**
 * Response after mapping
 */
export interface EntriesData {
    results: Entry[];
    page: number;
    total_pages: number;
}

interface Country {
    name: string,
    iso_3166_1: string
}

interface Credits {
    cast: { name: string }[]
}

interface General {
    production_countries: Country[],
    genres: { name: string }[]
}

export interface EntryDetails {
    general: General;
    credits: Credits
}