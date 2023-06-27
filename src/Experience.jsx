import * as THREE from "three";
import {
  useTexture,
  useGLTF,
  Backdrop,
  PresentationControls,
  OrbitControls,
  Html,
  SpotLight,
  Sparkles,
  PerformanceMonitor,
  Text,
  Float,
  Stage,
  Center,
  PositionalAudio,
  Environment,
} from "@react-three/drei";
import { Lightformers } from "./Lightformers";
import { useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { Piano } from "./Piano";
import { Player } from "./Player";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { Hall } from "./Hall";
import { Seat } from "./Seat";

const LIGHT_HEIGHT = 2;

export default function Experience({ clicked, isPlaying, ...props }) {
  const [degraded, degrade] = useState(false);

  return (
    <>
      {/* <Perf position="bottom-left" />     */}
      <color attach="background" />
      <Environment files="potsdamer_platz_2k.hdr" />
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={true} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={true} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={0.5} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[-0, 0]} // Vertical limits
        azimuth={[-Math.PI / 16, Math.PI / 16]} // Horizontal limits
        config={{ mass: 1, tension: 100, friction: 26 }} // Spring config</>
      >
        <Hall position={[-1, -1, -0.7]} scale={0.5} />

        <Player
          castShadow
          scale={2}
          position={[0.1, -0.9, 2.3]}
          rotation-y={3}
          isPlaying={isPlaying}
          clicked={clicked}
        />
        <Seat position={[0, -1, -0.3]} scale={0.53} />
        <Piano
          castShadow
          receiveShadow
          position-y={-1}
          position-z={1}
          scale={0.5}
        />
        {/* <Float
          rotation-y={Math.PI / 2}
          rotationIntensity={0.4}
          position-y={0.3}
        >
          <Text
            font="./Inter-Bold.ttf"
            letterSpacing={-0.1}
            fontSize={1}
            position={[0.1, 5, 0]}
            maxWidth={3}
            color="green"
          >
            CONCERT COUGHER
          </Text>
          <Text
            font="./Inter-Light.ttf"
            letterSpacing={0}
            fontSize={0.3}
            position={[0.1, 3.5, 0]}
            maxWidth={6}
            color="green"
          >
            You know you have to do it.
          </Text>
        </Float> */}
      </PresentationControls>
      <PerformanceMonitor onDecline={() => degrade(true)} />
    </>
  );
}
