/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Hall(props) {
  const { nodes, materials } = useGLTF("/concerthall2.glb");
  
  const bakedTexture = useTexture('./images/baked2.jpg')
  bakedTexture.flipY = false

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-28.357, -1.264, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            position={[-31.524, 22.048, 0]}
            rotation={[0, 0, -2.307]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[10.083, -3.81, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[-14.099, -1.715, 0]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            position={[44.146, -2.763, 0]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[-14.099, -1.715, 0]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
            position={[44.146, 44.32, 0]}
            >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    </group>
  );
}

useGLTF.preload("/concerthall2.glb");
