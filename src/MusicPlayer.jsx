import './style.css'
import { useState } from 'react';

export default function MusicPlayer(props) {

    return (
        <button className="play-button" onClick={props.playHandler}>PLAY</button>
    );
}
