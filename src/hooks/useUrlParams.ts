import { useSearchParams } from 'react-router-dom';

const DEFAULT_PAGE = '1';
const DEFAULT_CONTENT_TYPE = 'movie';

type useUrlReturnType = [ string | null, string, string, (newSearchParams: object) => void ];

/**
 * Hook improving URL params management
 * Return values and a function for easy update
 */
export const useUrlParams = (): useUrlReturnType => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const query = searchParams.get('query');
    const page = searchParams.get('page') || DEFAULT_PAGE;
    const contentType = searchParams.get('contentType') || DEFAULT_CONTENT_TYPE;

    const updateUrlParams = (newSearchParams: object) => {
        const currentSearchParams = {
            ...(contentType && { contentType }),
            ...(query && { query }),
            ...(page && { page }),
        }
        setSearchParams({
            ...currentSearchParams,
            ...newSearchParams
        })
    };
    return [ query, page, contentType, updateUrlParams ];
}