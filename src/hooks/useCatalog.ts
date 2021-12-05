import { useEffect, useState, useContext } from 'react';
import { moviesService } from '../services/movies.service';
import { EntriesData, Entry, EntryDetails } from '../interfaces/Entry';
import { mapEntriesData } from '../mappers/EntriesMapper';
import ConfigContext from '../context/ConfigContext';

/**
 * Provides content to be displayed by the component
 * Uses 2 different endpoints depending on the presence of the query
 */
export const useEntriesList = (contentType?: string | null, query?: string | null, page?: string | null): [EntriesData] => {
    const config = useContext(ConfigContext);
    const [ moviesData, setMoviesData ] = useState<EntriesData>({
        results: [],
        page: 0,
        total_pages: 0
    });
    useEffect(() => {
        if (contentType) {
            const promise = query 
                ? moviesService.fetchSearchResults(contentType, query, page)
                : moviesService.fetchDefaultResults(contentType, page);
            promise
                .then(res => mapEntriesData(res, config, contentType))
                .then(data => setMoviesData(data));
        } 
    }, [config, contentType, query, page]);
    return [ moviesData ];
}

/**
 * Loads details of an entry (movie / series)
 */
export const useEntryDetails = (item: Entry) => {
    const [ entryDetails, setEntryDetails ] = useState<EntryDetails | undefined>()
    useEffect(() => {
        const { contentType, id } = item;
        moviesService.fetchEntryDetails(contentType, id)
            .then(data => setEntryDetails(data));
    }, [item]);
    return [ entryDetails ];
}