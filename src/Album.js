import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Spinner from "./Spinner";
import { SearchContext } from './contexts/SearchContext';

const API_BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

function Album() {
    const [album, setalbum] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { searchData } = useContext(SearchContext);

    useEffect(() => {
        async function fetchalbum() {
            setIsLoading(true)
            const response = await axios.get(API_BASE_URL)
            console.log('data', response.data.feed.entry);
            setIsLoading(false)
            searchData ? setalbum(searchData) : setalbum(response.data.feed.entry)
        }
        fetchalbum();
    }, [searchData])
    return (
        <>
            {isLoading ? <Spinner />
                : album && album.length > 0 && album.map((album, index) => {
                    return (
                        <div key={index} className="rounded-lg shadow-xl bg-neutral-600 max-w-sm col-span-2 m-2">
                            <img className="rounded-sm w-full mb-1"
                                src={searchData ? album['artworkUrl100'] : album['im:image'][2].label} alt="album photo"
                            />
                            <div className="ml-2">
                                <h5 className="text-slate-100 text-base leading-tight font-medium mb-2">
                                    {searchData ? album['collectionName'] : album['im:name'].label}
                                </h5>
                                <p className="text-slate-300 text-sm mb-4">
                                    {searchData ? album['artistName'] : album['im:artist'].label}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Album;




{/* <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                            uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                            focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">Contact Us</button> */}