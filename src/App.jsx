import './style.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import CoughButton from './CoughButton'
import MusicPlayer from './MusicPlayer'
import Loader from './Loader.jsx'
import { Suspense, useState, useRef } from 'react'
import ReactHowler from 'react-howler';

export default function App(props) {

    var coughSfx = new Howl({
        src: ['sounds/cough.mp3'],
        volume: 0.5,
    });
    
    // var pianoSfx = new Howl({
    //     src: ['sounds/chopin.mp3'],
    //     volume: 0.5,
    // });

    const pianoPlayer = useRef(null);
    
    const coughHandler = () => {
        coughSfx.play();
    };
    
    const [isPlaying, setPlaying] = useState(false);
    const playHandler = () => {
        if (isPlaying) {
            //pianoPlayer.current.howler.stop();
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    };
    
    return (
        <>
        <Suspense fallback={<Loader />}>
            <Canvas
                dpr={[1, 2]}
                style={{
                    position: "fixed"
                }}
                gl={{ toneMappingExposure: 0.7 }}
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ -1, 1.5, 7 ]
                } }
            >
                <Experience 
                    isPlaying={isPlaying}/>
            </Canvas>
        </Suspense>
        <div className="welcome-text">Wait for the right moment..</div>
        <ReactHowler
            preload={true}
            src='sounds/chopin.mp3'
            playing={isPlaying}
            volume={0.5}
            ref={pianoPlayer}
        />
        <MusicPlayer playHandler={playHandler}/>
        <CoughButton coughHandler={coughHandler}/>
        </>
    );
}
