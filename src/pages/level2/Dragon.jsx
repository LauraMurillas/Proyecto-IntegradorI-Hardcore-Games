// src/pages/level2/Dragon.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

function Dragon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/models/dragon.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log('Available animations:', actions); // Agregar esto para ver las animaciones disponibles
    if (actions['Fly_New']) {
      actions['Fly_New'].play();
    } else {
      console.warn('Animation "Fly_New" not found.');
    }
  }, [actions]);

  useFrame((state, delta) => {
    group.current.rotation.y += 0.01; // Rotar el dragón lentamente en su lugar
  });

  return (
    
     
      <group ref={group} {...props} dispose={null}>
        <RigidBody type='fixed' name='dragon'>
      <group name="Scene">
        <group name="Armature" position={[-8.256, 18.168, -4.542]} scale={0.085}>
          <group name="Dragon_Mesh">
            <skinnedMesh
              name="Dragon_Mesh_1"
              geometry={nodes.Dragon_Mesh_1.geometry}
              material={materials['Game_dragon.002']}
              skeleton={nodes.Dragon_Mesh_1.skeleton}
            />
            <skinnedMesh
              name="Dragon_Mesh_2"
              geometry={nodes.Dragon_Mesh_2.geometry}
              material={materials['Game_dragon.003']}
              skeleton={nodes.Dragon_Mesh_2.skeleton}
            />
            <skinnedMesh
              name="Dragon_Mesh_3"
              geometry={nodes.Dragon_Mesh_3.geometry}
              material={materials['EYES.001']}
              skeleton={nodes.Dragon_Mesh_3.skeleton}
            />
          </group>
          <primitive object={nodes.pelvic_2} />
          <primitive object={nodes.back_food_L} />
          <primitive object={nodes.Hand_R} />
          <primitive object={nodes.back_food_R} />
          <primitive object={nodes.Hand_L} />
          <primitive object={nodes.Scene} />
        </group>
      </group>
      </RigidBody>
    </group>

   
  );
}

useGLTF.preload('/assets/models/dragon.glb');

export default Dragon;
