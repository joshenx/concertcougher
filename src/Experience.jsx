import * as THREE from 'three'
import { PivotControls, OrbitControls, Html, SpotLight, Sparkles, PerformanceMonitor, Text, Float, Stage, Center, PositionalAudio } from '@react-three/drei'
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

        <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={6}
            maxDistance={15}
            minPolarAngle={Math.PI/3}
            maxPolarAngle={Math.PI/2}
            dampingFactor={0.03}
            enableDamping
        />

        <Stage
            preset="portrait"
            adjustCamera
            intensity={0.5}
            shadows={{type:'contact', offset:-1, size: 256}}
            environment="warehouse"
        >
            <PivotControls>
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
            </PivotControls>
        </Stage>
        
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