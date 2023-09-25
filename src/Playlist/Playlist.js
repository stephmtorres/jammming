import React from 'react';
import './Playlist.css';
import Track from '../Track/Track';

function Playlist({ tracks, onAdd, onRemove }) {
    return (
        <div className="Playlist">
            <h2>Playlist</h2>
            {tracks.map(track =>
                <Track
                    key={track.id}
                    track={track}
                    isRemovable={true}
                    onRemove={onRemove} // Make sure onRemove is defined as a prop
                />
            )}
        </div>
    );
}

export default Playlist;
