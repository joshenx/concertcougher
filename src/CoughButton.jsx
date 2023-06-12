import './style.css'
import { useState } from 'react';
import {Howl, Howler} from 'howler';

export default function CoughButton() {
    var sound = new Howl({
        src: ['sounds/cough.mp3'],
        volume: 0.5,
      });

    const coughHandler = () => {
        //setPlaybackRate(playbackRate + 0.1);
        sound.play();
    };

    return (
        <button className="cough-action" onClick={coughHandler}>COUGH</button>
    );
}
