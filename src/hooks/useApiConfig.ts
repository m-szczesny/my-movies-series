import { useEffect, useState } from 'react';
import { moviesService } from '../services/movies.service';
import { Config } from '../interfaces/Config';

/**
 * Gets themovieDB API config
 */
export const useApiConfig = () => {
    const [ config, setConfig ] = useState<Config | undefined>();
    useEffect(() => {
        moviesService.fetchApiConfig()
            .then(res => res.json())
            .then(data => {
                setConfig({
                    baseUrlImage: data.images.base_url,
                    posterSize: data.images.poster_sizes[2],
                    backDropSize: data.images.backdrop_sizes[1]
                })
            });
    }, []);
    return [config];
}