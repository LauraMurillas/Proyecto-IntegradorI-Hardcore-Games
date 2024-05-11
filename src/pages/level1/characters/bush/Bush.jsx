import React, { useRef, useFrame, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody } from "@react-three/rapier"

export default function Bush(props) {
  const { nodes, materials } = useGLTF("/assets/models/bush/Arbusto.glb")

  return (
    <group {...props} dispose={null} position={[3, 0.3, 0]}>
      <RigidBody colliders={false} type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stylized_bush.geometry}
        material={materials['stylized bush']}
        scale={[1, 1, 1.09]}
      />
      <CuboidCollider args={[0.6, 0.8, 0.6]} position={[0, 0.3, 0]}/> 
      </RigidBody>
    </group>
  )
}

useGLTF.preload("/assets/models/bush/Arbusto.glb")