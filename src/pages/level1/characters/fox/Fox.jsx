import {
  CapsuleCollider,
  CuboidCollider,
  RigidBody,
} from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useFox } from "../../../../context/FoxContext";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Fox() {
  const foxBodyRef = useRef();
  const foxRef = useRef();
  const { fox, setFox } = useFox();
  //const { nodes, materials, animations} = useGLTF("/assets/models/fox/Fox.glb");
  const { nodes, materials, animations} = useGLTF("/assets/models/fox/Prueba2.glb");
  const { actions } = useAnimations(animations, foxRef)
  
 

   //useEffect(() => {
   //    setFox({
   //        ref: foxRef.current,
   //        body: foxBodyRef.current
   //    })
   //}, [foxBodyRef.current, foxRef.current])

  useEffect(() => {
    actions[fox.animation]?.reset().fadeIn(0.2).play();
    return () => {
      if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
    };
  }, [actions, fox.animation]);

  return (
    //<RigidBody ref={foxBodyRef} position={[0, 1, -3]} colliders={false}>
    //<group ref={foxRef} name="Scene" position-y={-0.8}>
    //    <group
    //      name="Fox"
    //      >
    //      <skinnedMesh
    //        name="Fox_Mesh"
    //        geometry={nodes.Fox_Mesh.geometry}
    //        material={materials.Fox}
    //        skeleton={nodes.Fox_Mesh.skeleton}
    //      />
    //       <primitive object={nodes.Fox_Pelvis} />
    //    </group>
    //  </group>
    //</RigidBody>

    <RigidBody ref={foxBodyRef} position={[0, 0, 0]} colliders={false}>
    <group ref={foxRef} name="Scene">
        <group
          name="Fox"
          position={[0, -0.65, 0]}
          rotation={[0.094, -Math.PI / 1.7, 0]}
          scale={0.01}
          >
          <skinnedMesh
            name="Fox_Mesh"
            geometry={nodes.Fox_Mesh.geometry}
            material={materials.Fox}
            skeleton={nodes.Fox_Mesh.skeleton}
          />
          <primitive object={nodes.Fox_Pelvis} />
        </group>
    </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/fox/Prueba2.glb")
