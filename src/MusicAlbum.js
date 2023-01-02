import React from 'react';

import Music from './Music';

function MusicAlbum() {
    return (
        <div className="grid grid-cols-8 bg-neutral-700 col-start-3 gap-3 col-span-8 mt-20 h-4/6 overflow-auto">
            <div className="flex justify-between bg-neutral-900 py-1 items-center col-span-full text-white">
                <p className="ml-3"> Top 100 Albums </p>
                <input className="mr-3 w-72 placeholder:italic placeholder:text-slate-100 block bg-neutral-700 rounded-md py-2 pl-9 pr-10 shadow-sm focus:outline-none sm:text-sm" placeholder="Search for music..." type="text" name="search" />
            </div>
            {
                <Music />
            }
        </div>
    )
}
export default MusicAlbum;