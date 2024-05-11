import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody, CuboidCollider } from "@react-three/rapier"

export default function World4(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Map4.glb")
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2.546, 0]}>

        <RigidBody type="fixed" colliders="cuboid" position={[0, 0, 0]}>
            <CuboidCollider args={[40, 0.5, 40]} />
        </RigidBody>


        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group position={[0, -2.546, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles_2.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arbustos1.geometry}
        material={materials.Kust_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arbustos2.geometry}
        material={materials.Kust_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arbustos3.geometry}
        material={materials.Paporotnik}
      />

        <RigidBody colliders="trimesh" type="fixed">
            <mesh onClick={(e) => e.stopPropagation()} 
                castShadow={false} 
                receiveShadow={true} 
                geometry={nodes.Pasto.geometry} 
                material={materials.Floor} 
            />
        </RigidBody>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinos.geometry}
        material={materials.Green_Elka}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinos_3.geometry}
        material={materials.Green_Elka}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinos_4.geometry}
        material={materials.Green_Elka}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinos2.geometry}
        material={materials.Green_Elka}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pinos5.geometry}
        material={materials.Green_Elka}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Troncos1.geometry}
        material={materials['Wood_tree.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Troncos2.geometry}
        material={materials['Wood_tree.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TroncosObst.geometry}
        material={materials['Wood_tree.001']}
        position={[0, -2.546, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TroncosObst002.geometry}
        material={materials['Wood_tree.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TroncosObst003.geometry}
        material={materials['Wood_tree.001']}
      />
      <RigidBody colliders="trimesh" type="fixed">
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.cave_low_cave_0.geometry}
            material={materials.cave}
            position={[0, -0.53, 0]}
            rotation={[-0.003, -0.054, -0.088]}
        />
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_2.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_2.geometry}
        material={materials['Material.003']}
      />
    </group>
  )
}

useGLTF.preload("/assets/models/world/Map4.glb")