import React from 'react';

function Track({ track, onAdd, onRemove, isRemovable }) {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {isRemovable
                ? <button className="Track-action" onClick={() => onRemove(track)}>-</button>
                : <button className="Track-action" onClick={() => onAdd(track)}>+</button>
            }
        </div>
    );
}

export default Track;
