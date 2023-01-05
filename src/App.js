import React from "react";
import Navbar from './Navbar';
import MusicAlbum from './MusicAlbum';
import { SearchProvider } from './contexts/SearchContext'


import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <SearchProvider>
        <MusicAlbum />
      </SearchProvider>
    </>
  );
}

export default App;
