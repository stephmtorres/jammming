import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Tracklist from './TrackList/Tracklist';
import Track from './Track/Track';

function App() {
  const mockTracks = [
      { id: 1, name: 'Everybody wants to rule the world', artist: 'Tears for Fears', album: 'Songs from the big chair' },
      { id: 2, name: 'Shout', artist: 'Tears for Fears', album: 'Songs from the big chair' },
      { id: 3, name: 'Head Over Heels / Broken', artist: 'Tears for Fears', album: 'Songs from the big chair' }
  ];

  const [tracks, setTracks] = useState(mockTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(trackToAdd) {
      if (playlistTracks.find(savedTrack => savedTrack.id === trackToAdd.id)) {
          return; // Exit the function if the track is already in the playlist
      }

      // If not in the playlist, add it
      setPlaylistTracks(prevTracks => [...prevTracks, trackToAdd]);
  }

  function removeTrack(trackToRemove) {
    setPlaylistTracks(prevTracks => prevTracks.filter(track => track.id !== trackToRemove.id));
}

return (
    <div className="App">
        <h1>My Music App</h1>
        <SearchBar />
        <SearchResults tracks={tracks} onAdd={addTrack} />
        <Playlist tracks={playlistTracks} onRemove={removeTrack} />
    </div>
);
}

export default App;
