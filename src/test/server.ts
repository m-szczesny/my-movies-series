import { rest } from 'msw';
import { setupServer } from 'msw/node';
import configResponse from './mocks/configResponse.json';
import discoverMovieResponse from './mocks/discoverMovieResponse.json';
import discoverTVResponse from './mocks/discoverTVResponse.json';
import searchTVResponse from './mocks/searchTVResponse.json';

/**
 * Handlers for mock API calls
 */
const handlers = [
    rest.get('https://api.themoviedb.org/3/configuration', (req, res, ctx) => {
        return res(ctx.json(configResponse));
    }),
    rest.get('https://api.themoviedb.org/3/discover/movie', (req, res, ctx) => {
        return res(ctx.json(discoverMovieResponse));
    }),
    rest.get('https://api.themoviedb.org/3/discover/tv', (req, res, ctx) => {
        return res(ctx.json(discoverTVResponse));
    }),
    rest.get('https://api.themoviedb.org/3/search/tv', (req, res, ctx) => {
        return res(ctx.json(searchTVResponse));
    })
]

export const server = setupServer(...handlers);
