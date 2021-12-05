import { createContext } from 'react';
import { Config } from '../interfaces/Config';

export default createContext<Config>({
    baseUrlImage: '',
    posterSize: '',
    backDropSize: ''
});
