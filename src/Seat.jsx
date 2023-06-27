/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Seat(props) {
  const { nodes, materials } = useGLTF("/seat.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Black Keys"]}
        position={[1.256, 0.092, 3.955]}
        scale={[0.07, 0.811, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Black Keys"]}
        position={[-0.899, 0.092, 3.955]}
        scale={[0.07, 0.811, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Black Keys"]}
        position={[-0.899, 0.092, 5.098]}
        scale={[0.07, 0.811, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Black Keys"]}
        position={[1.256, 0.092, 5.098]}
        scale={[0.07, 0.811, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Black Keys"]}
        position={[0.149, 0.438, 4.526]}
        scale={[-1.277, 0.142, -0.715]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Piano Base"]}
        position={[0.149, 0.785, 4.526]}
        scale={[-1.348, 0.216, -0.766]}
      />
    </group>
  );
}

useGLTF.preload("/seat.glb");