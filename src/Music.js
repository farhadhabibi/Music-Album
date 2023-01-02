import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'https://itunes.apple.com/us/rss/topalbums/limit=4/json';

function Music() {
    return (
        < div className="p-5 rounded-lg shadow-xl bg-neutral-700 max-w-sm col-span-2 m-2" >
            {/* {< img class="w-full" src="/img/card-top.jpg" alt="Music photo" />} */}
            <h5 className="text-white text-xl leading-tight font-medium mb-2">Card title</h5>
            <p className="text-white text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div >
    )
}
export default Music;

