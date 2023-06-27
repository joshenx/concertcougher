import * as THREE from 'three'
import { Backdrop, PresentationControls, PivotControls, OrbitControls, Html, SpotLight, Sparkles, PerformanceMonitor, Text, Float, Stage, Center, PositionalAudio, Environment } from '@react-three/drei'
import { Lightformers } from './Lightformers'
import { useState, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Piano } from './Piano'
import { Player } from './Player'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

const LIGHT_HEIGHT = 2;

export default function Experience({clicked, isPlaying, ...props})
{
    // const { minDistance, maxDistance, minPolarAngle, maxPolarAngle } = useControls('Zoom Limits', {
    //     minDistance: { value: 6, min: 0, max: 15 },
    //     maxDistance: { value: 14, min: 0, max: 500 },
    //     minPolarAngle: { value: Math.PI/4, min: 0, max: Math.PI*2 },
    //     maxPolarAngle: { value: Math.PI/2, min: 0, max: Math.PI*2 },
    // })
    const [degraded, degrade] = useState(false);

    return <>    
        <Perf position="bottom-left" />    
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
        azimuth={[-Math.PI/16, Math.PI/16]} // Horizontal limits
        config={{ mass: 1, tension: 100, friction: 26 }} // Spring config</>
        >
        <Center>
        <Piano 
            castShadow receiveShadow
            position-y={0}
            scale={0.5}
            rotation-y={-1}
        />
        <Player
            castShadow
            scale={1.9}
            position={[-1.2,0.15,0.9]}
            rotation-y={2}
            isPlaying={isPlaying}
            clicked={clicked}
        />
        </Center>
        </PresentationControls>
        <Float rotationIntensity={ 0.4 } position-y = { 1 } rotation-x ={ -0.3 } > 
            <Text
                font="./Inter-Bold.ttf"
                letterSpacing={ -0.1 }
                fontSize={ 1 }
                position={ [5, 3, -2 ] }
                maxWidth={ 3 }
            >
                CONCERT COUGHER
            </Text>
            <Text
                font="./Inter-Light.ttf"
                letterSpacing={ 0 }
                fontSize={ 0.3 }
                position={ [5, 1.5, -2 ] }
                maxWidth={ 6 }
            >
                You know you have to do it.
            </Text>
        </Float>
        
        <PerformanceMonitor onDecline={() => degrade(true)} />
    </>
}

function MovingSpot({ vec = new Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={1} distance={15} angle={0.35} attenuation={6} anglePower={4} intensity={4} {...props} />
}

function Annotation({ children, ...props }) {
    return (
      <Html
        {...props}
        transform
        occlude="blending">
        <button onClick={() => {console.log(children)}} className="annotation">{children}</button>
      </Html>
    )
}