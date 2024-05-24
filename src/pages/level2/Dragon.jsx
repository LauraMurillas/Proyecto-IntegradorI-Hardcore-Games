// src/pages/level2/Dragon.jsx
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

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
      <primitive object={nodes.Scene} />
    </group>
  );
}

useGLTF.preload('/assets/models/dragon.glb');

export default Dragon;
