import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Text } from '@react-three/drei';
import HealthBar from '../../components/HealthBar';
import * as THREE from 'three'; // Importar THREE

function Dragon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/models/dragon.glb');
  const { actions } = useAnimations(animations, group);
  const [lives, setLives] = useState(15);
  const maxLives = 15;
  const healthBarPositionRef = useRef(new THREE.Vector3());

  
  useEffect(() => {
    console.log('Available animations:', actions); // Agregar esto para ver las animaciones disponibles
    if (actions['Fly_New']) {
      actions['Fly_New'].play();
    } else {
      console.log('Animation "Fly_New" not found.');
    }
  }, [actions]);

  useFrame((state, delta) => {
    group.current.rotation.y += 0.01; // Rotar el dragón lentamente en su lugar
  });

  const updateHealthBarPosition = () => {
    if (group.current) {
      const boundingBox = new THREE.Box3().setFromObject(group.current);
      const dragonPosition = boundingBox.min.clone().add(boundingBox.max).multiplyScalar(0.5);
      healthBarPositionRef.current.copy(dragonPosition);
      healthBarPositionRef.current.y -= 15;
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <RigidBody type="fixed" name="dragon">
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
            {/* Aquí se implementa la barra de salud*/} 
        <Html position={[0, 15, 0]}>
          <div style={{ width: 100, height: 10, backgroundColor: 'black', border: '1px solid white' }}>
            <div style={{ width: `${(lives / maxLives) * 100}%`, height: '100%', backgroundColor: 'red' }} />
          </div>
        </Html>
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/assets/models/dragon.glb');

export default Dragon;
