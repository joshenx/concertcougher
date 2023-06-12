import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import CoughButton from './CoughButton'
import MusicPlayer from './MusicPlayer'
import Loader from './Loader.jsx'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
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
            <Experience />
        </Canvas>
    </Suspense>
    <div className="welcome-text">Wait for the right moment..</div>
    <MusicPlayer />
    <CoughButton />
    </>
)