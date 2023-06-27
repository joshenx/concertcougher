import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import CoughButton from "./CoughButton";
import MusicPlayer from "./MusicPlayer";
import Loader from "./Loader.jsx";
import { Suspense, useState, useRef, useEffect } from "react";
import ReactHowler from "react-howler";
import Footer from "./Footer.jsx";
import Overlay from "./Overlay.jsx";

export default function App({ ready, clicked }) {
  const [playerText, setPlayerText] = useState("STOP");
  const [shushChance, setShushChance] = useState(0.05);
  // var pianoSfx = new Howl({
  //     src: ['sounds/chopin.mp3'],
  //     volume: 0.5,
  // });

  let coughValues = [
    {
      src: "sounds/coughquick.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/coughrare.mp3",
      weight: 0.05,
    },
    {
      src: "sounds/cough1.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/cough2.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/ringtone.mp3",
      weight: 0.001,
    },
    {
      src: "sounds/femalecough1.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/femalecough2.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/femalecough3.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/femalecoughquick.mp3",
      weight: 0.1,
    },
    {
      src: "sounds/femalecoughrare.mp3",
      weight: 0.1,
    },
  ];

  let shushValues = [
    {
      src: "sounds/shushshort.mp3",
      weight: 0.5,
    },
    {
      src: "sounds/shushlong.mp3",
      weight: 0.5,
    },
  ];

  const weightedRandom = (options) => {
    var i;

    var weights = [options[0].weight];

    for (i = 1; i < options.length; i++)
      weights[i] = options[i].weight + weights[i - 1];

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) if (weights[i] > random) break;

    return options[i].src;
  };

  const pianoPlayer = useRef(null);

  const coughHandler = () => {
    console.log("App.jsx: cough fired!");
    var coughSrc = weightedRandom(coughValues);
    var coughSfx = new Howl({
      src: [coughSrc],
      volume: Math.random() * 0.5 + 0.5,
    });

    coughSfx.play();

    if (Math.random() * 5 < shushChance) {
      console.log(`App.jsx: shush fired!`);
      var shushSrc = weightedRandom(shushValues);
      var shushSfx = new Howl({
        src: [shushSrc],
        volume: shushChance / 2,
      });

      setTimeout(() => {
        shushSfx.play();
      }, 1000);

      setShushChance(0.05);
    } else {
      console.log(`App.jsx: Shush chance currently ${shushChance}`);
      setShushChance(shushChance * 2);
    }
  };

  const [isPlaying, setPlaying] = useState(false);
  const playHandler = () => {
    console.log(`App.jsx: playing was ${isPlaying}`);
    if (isPlaying) {
      //pianoPlayer.current.howler.stop();
      setPlayerText("PLAY");
      setPlaying(false);
    } else {
      setPlayerText("STOP");
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (clicked) {
      setPlaying(true);
    }
  }, [clicked]);

  return (
    <>
      <Canvas
        dpr={[1, 2]}
        style={{
          position: "fixed",
        }}
        gl={{ toneMappingExposure: 0.7 }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [20, 3, 0],
        }}
      >
        <Experience clicked={clicked} isPlaying={isPlaying} />
      </Canvas>
      {/* <div className="welcome-text">Wait for the right moment..</div> */}
      {/* <ReactHowler
            preload={true}
            src='sounds/chopin.mp3'
            playing={isPlaying}
            volume={0.5}
            ref={pianoPlayer}
        /> */}
      <MusicPlayer text={playerText} playHandler={playHandler} />
      <CoughButton coughHandler={coughHandler} />
      <Overlay clicked={clicked} />
      <Footer />
    </>
  );
}
