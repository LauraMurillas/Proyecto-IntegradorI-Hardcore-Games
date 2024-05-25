import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Lamp(props) {
  const { nodes, materials } = useGLTF("/assets/models/lamp/lamp.glb");
  const lampRef = useRef();
  const lightRef = useRef();

  // Update light position to follow the lamp position
  useEffect(() => {
    if (lampRef.current) {
      const light = lightRef.current;
      const lamp = lampRef.current;

      const updateLightPosition = () => {
        light.position.set(lamp.position.x-1 , lamp.position.y + 3, lamp.position.z -4); // Adjust the y position to be above the lamp
      };

      const animate = () => {
        updateLightPosition();
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <group ref={lampRef} {...props} dispose={null}>
      <group
        position={[-0.532, 1.294, 1.389]}
        rotation={[Math.PI, -0.738, Math.PI]}
        scale={[0.01, 0.009, 0.01]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.saltLamp_mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial001.geometry}
          material={materials.saltLamp_mtl}
          position={[0, 3.401, 0]}
          rotation={[-Math.PI, 0.754, -Math.PI]}
          scale={[0.991, 1.127, 0.991]}
        />
      </group>
      <pointLight
        ref={lightRef}
        color="#ffffff"
        intensity={5}  // Adjusted intensity
        distance={50}  // Increased distance for more range
        decay={2}
        castShadow
        position={[0, 0, 0]} // Position above the lamp
      />
    </group>
  );
}

useGLTF.preload("/assets/models/lamp/lamp.glb");
