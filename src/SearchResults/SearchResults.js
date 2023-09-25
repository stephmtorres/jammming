import React from 'react';
import Track from '../Track/Track';
import './SearchResults.css';

function SearchResults({ tracks, onAdd }) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {tracks.map(track =>
                <Track key={track.id} track={track} onAdd={onAdd} isRemovable={false} />
            )}
        </div>
    );
}

export default SearchResults;
