import './style.css'
import { useSound } from 'use-sound';
import { useState } from 'react';
import {Howl, Howler} from 'howler';

export default function MusicPlayer() {
    var sound = new Howl({
        src: ['sounds/chopin.mp3'],
        volume: 0.5,
      });

    const musicHandler = () => {
        //setPlaybackRate(playbackRate + 0.1);
        sound.stop();
        sound.play();
    };

    return (
        <button className="play-button" onClick={musicHandler}>PLAY</button>
    );
}
