import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/laberinto.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload("/assets/models/world/laberinto.glb")


