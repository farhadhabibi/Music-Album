import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=12/json';

function Music() {
    const [music, setMusic] = useState();

    useEffect(() => {
        async function fetchMusic() {
            const response = await axios.get(API_BASE_URL)
            console.log('data', response.data.feed.entry);
            setMusic(response.data.feed)
        }
        fetchMusic();
    }, [])
    return (
        <>
            {
                music && music.entry.length > 0 && music.entry.map((music, index) => {
                    return (
                        <div key={music.id.attributes['im:id']} className="rounded-lg shadow-xl bg-neutral-600 max-w-sm col-span-2 m-2">
                            <img className="rounded-sm w-full mb-1" src={music['im:image'][2].label} alt="Music photo" />
                            <div className="ml-2">
                                <h5 className="text-slate-100 text-base leading-tight font-medium mb-2">{music['im:name'].label}</h5>
                                <p className="text-slate-300 text-sm mb-4">{music['im:artist'].label}</p>
                                {/* <p className="text-white text-base mb-4">{music['im:releaseDate'].attributes.label}</p>
                                <p className="text-white text-base mb-4">{music['im:price'].label}</p> */}
                            </div>
                            {/* <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                            uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                            focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">Contact Us</button> */}
                        </div>
                    )
                })
            }
        </>
    )
}
export default Music;
