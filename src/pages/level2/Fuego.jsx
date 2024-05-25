import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function Fuego(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/models/rewards/fire.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Available Actions Fire: ", actions);
    if(actions['Take 001']){
        actions['Take 001'].play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <RigidBody type='fixed' name='Fuego'>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="562a047e15904e1db8aa0c0e2df6e95dfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="fire3Group20972" position={[0, 0.3, 0]} scale={0.5}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials.fire3lambert1}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/assets/models/rewards/fire.glb');