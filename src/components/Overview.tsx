import React from 'react';
import { Input, Radio } from 'antd';
import { useEntriesList } from '../hooks/useCatalog';
import { useUrlParams  } from '../hooks/useUrlParams';
import { EntriesList } from './EntriesList';

const { Search } = Input;

const DEFAULT_PAGE = '1';

export const Overview = () => {
    const [ query, page, contentType, updateUrlParams ] = useUrlParams();
    const [ contentData ] = useEntriesList(contentType, query, page);

    /**
     * Adds the new query to url parameters
     * Changing the query resets the page to default
     * @param event 
     */
    const onSearch = (event: any) => {
        updateUrlParams({
            query: event.target.value,
            page: DEFAULT_PAGE
        })
    }

    /**
     * Adds the new page to url parameters
     * Keeps other params unchanged
     * @param p 
     */
    const onPaginate = (page: number) => {
        updateUrlParams({
            page: page.toString()
        });
    }

    /**
     * Adds the new content type to url parameters
     * Changing content type resets page to default
     * @param event 
     */
    const onChangeContentType = (event: any) => {
        updateUrlParams({
            contentType: event.target.value,
            page: DEFAULT_PAGE
        });
    }

    const getEntriesListProps = () => ({
        contentData,
        title: query ? 'RÉSULTAT DE LA RECHERCHE' : 'CONTENUS POPULAIRES',
        onPaginate
    })

    return(
        <>
            <Search
                placeholder='Rechercher'
                allowClear
                size='large'
                value={query || ''}
                onChange={onSearch}
            />
            <Radio.Group onChange={onChangeContentType} value={contentType}>
                <Radio.Button value='movie'>Films</Radio.Button>
                <Radio.Button value='tv'>Séries</Radio.Button>
            </Radio.Group>
            <EntriesList {...getEntriesListProps()} />
        </>
    )
}

export default Overview;