import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World2(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Map.glb")
  return (
    <group {...props} dispose={null}>
    
        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Arboles.geometry}
          material={materials['Green_sosna.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Arboles_2.geometry}
          material={materials['Green_sosna.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Arbustos1.geometry}
          material={materials.Kust_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Arbustos2.geometry}
          material={materials.Kust_2}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={false}
          receiveShadow={false}
          geometry={nodes.Arbustos3.geometry}
          material={materials.Paporotnik}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <RigidBody colliders="trimesh" type="fixed">
            <mesh onClick={(e) => e.stopPropagation()} 
                castShadow={false} 
                receiveShadow={true} 
                geometry={nodes.Pasto.geometry} 
                material={materials.Floor} 
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
            />
        </RigidBody>

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Pinos.geometry}
          material={materials.Green_Elka}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Pinos_3.geometry}
          material={materials.Green_Elka}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Pinos_4.geometry}
          material={materials.Green_Elka}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Pinos2.geometry}
          material={materials.Green_Elka}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <mesh
          castShadow={true}
          receiveShadow={false}
          geometry={nodes.Pinos5.geometry}
          material={materials.Green_Elka}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        />

        <RigidBody colliders={false} type="fixed">
            <mesh
                geometry={nodes.Troncos1.geometry}
                material={materials['Wood_tree.001']}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
            />
            <CuboidCollider args={[0.2, 0.5, 47.5]} /> 
        </RigidBody>

        <RigidBody colliders={false} type="fixed">
            <mesh
                geometry={nodes.Troncos2.geometry}
                material={materials['Wood_tree.002']}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
            />
            <CuboidCollider args={[0.2, 0.5, 47.5]} /> 
        </RigidBody>
 
    </group>
  )
}

useGLTF.preload("/assets/models/world/Map.glb")