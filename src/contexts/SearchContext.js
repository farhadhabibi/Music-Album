import React, { createContext, useState } from 'react';
import axios from 'axios';
const SEARCH_API = 'https://itunes.apple.com/search?';

export const SearchContext = createContext();

export function SearchProvider(props) {
    const [searchData, setSearchData] = useState('');

    const handleSearchAlbum = async (query, entity = 'album') => {
        const response = await axios.get(`${SEARCH_API}term=${query}&entity=${entity}`);
        setSearchData(response.data.results);
    }

    return (
        <SearchContext.Provider value={{
            searchData, handleSearchAlbum
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}
