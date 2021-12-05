const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '92b418e837b833be308bbfb1fb2aca1e';

const lang = navigator.language

/**
 * Fetch ThemovieDB Api config (needed for displaying images)
 * @returns 
 */
const fetchApiConfig = () => {
    const url = `${BASE_URL}/configuration?api_key=${API_KEY}`;
    return fetch(url);
}

/**
 * Fetch most popular content list
 */
const fetchDefaultResults = (contentType?: string | null, page?: string | null) => {
    const url = `${BASE_URL}/discover/${contentType}?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}&language=${lang}`
    const result = fetch(url)
        .then(res => res.json())
    return result;
}

/**
 * Fetch results by query
 */
const fetchSearchResults = (contentType?: string | null, query?: string, page?: string | null) => {
    const url = `${BASE_URL}/search/${contentType}?api_key=${API_KEY}&query=${query}&sort_by=popularity.desc&page=${page}&language=${lang}`
    const result = fetch(url)
        .then(res => res.json())
    return result;
}

/**
 * Fetch entry details
 */
const fetchEntryDetails = async (contentType: string, id: string) => {
    const generalURL = `${BASE_URL}/${contentType}/${id}?api_key=${API_KEY}&language=${lang}`
    const general = await fetch(generalURL)
        .then(res => res.json());
    const castURl = `${BASE_URL}/${contentType}/${id}/credits?api_key=${API_KEY}&language=${lang}`
    const credits = await fetch(castURl)
        .then(res => res.json());
    return {
        general,
        credits
    };
}

export const moviesService = {
    fetchApiConfig,
    fetchDefaultResults,
    fetchSearchResults,
    fetchEntryDetails
}