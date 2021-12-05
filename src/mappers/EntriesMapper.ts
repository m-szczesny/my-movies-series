import moment from 'moment';
import { Config } from "../interfaces/Config";
import { EntriesData, Entry, Movie, RawEntriesData, TVShow } from "../interfaces/Entry";

const POSTER_PLACEHOLDER = 'https://via.placeholder.com/185x277.png?text=...';

const _mapEntry = (raw: Movie | TVShow, config: Config, contentType: string): Entry => {
    const { baseUrlImage, posterSize, backDropSize } = config;
    const refDate = 'release_date' in raw ? raw.release_date : raw.first_air_date;
    return {
        ...raw,
        contentType,
        title: 'title' in raw ? raw.title : raw.name,
        posterURL: raw.poster_path ? `${baseUrlImage}${posterSize}${raw.poster_path}` : POSTER_PLACEHOLDER,
        backDropURL: raw.backdrop_path ? `${baseUrlImage}${backDropSize}${raw.backdrop_path}` : '',
        year: moment(refDate).format('YYYY')
    }
}

export const mapEntriesData = (raw: RawEntriesData, config: Config, contentType: string): EntriesData => {
    return {
        ...raw,
        results: raw.results.map((r) => _mapEntry(r, config, contentType))
    }
}