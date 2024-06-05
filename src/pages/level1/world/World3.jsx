
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World3(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/MapPrueba.glb")
  return (
    <group {...props} dispose={null}>
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
        geometry={nodes.Arboles_2002.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles_2003.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles_2004.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles_2007.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arboles_2009.geometry}
        material={materials['Green_sosna.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arbustos1.geometry}
        material={materials.Kust_2}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint001.geometry}
        material={materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint003.geometry}
        material={materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint004.geometry}
        material={materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint002.geometry}
        material={materials.Stone}
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
      <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.Troncos1.geometry}
                material={materials['Wood_tree.001']}
                scale={5}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.Troncos2.geometry}
                material={materials['Wood_tree.002']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst002.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst003.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst004.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst005.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst006.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst007.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst008.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst009.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst010.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst011.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh
                geometry={nodes.TroncosObst012.geometry}
                material={materials['Wood_tree.001']}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow 
                receiveShadow 
                geometry={nodes.Cueva001.geometry} 
                material={materials.cave} 
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2002.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2003.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2004.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2005.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2006.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2007.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2008.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2009.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2010.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2011.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2012.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2013.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2014.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2015.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2016.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2017.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2018.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2019.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2020.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2021.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2022.geometry}
                material={materials.material_0}
            />
        </RigidBody>

        <RigidBody colliders="trimesh" type="fixed">
            <mesh 
                castShadow
                receiveShadow
                geometry={nodes.Object_2023.geometry}
                material={materials.material_0}
            />
        </RigidBody>
      
    </group>
  )
}

useGLTF.preload("/assets/models/world/MapPrueba.glb")