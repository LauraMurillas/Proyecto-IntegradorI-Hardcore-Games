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
  const { nodes, materials, animations} = useGLTF("/assets/models/fox/Prueba2.glb");
  const { actions } = useAnimations(animations, foxRef)

  useEffect(() => {
        actions[fox.animation]?.reset().fadeIn(0.5).play();
        return () => {
          if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
        };
      }, [actions, fox.animation]);

  return (

    <RigidBody ref={foxBodyRef} position={[0, 0, 0]} colliders={false}>
    <group ref={foxRef} name="Scene">
        <group
          name="Fox"
          position={[0, -0.63, 0]}
          rotation={[0.094, -Math.PI / 1.7, 0.094]}
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

// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";
// import { useFox } from "../../../../context/FoxContext";

// export default function Fox(props) {
//   const foxBodyRef = useRef();
//   const foxRef = useRef();
//   const { fox, setFox } = useFox();
//   const { nodes, materials, animations} = useGLTF("/assets/models/fox/Prueba2.glb");
//   const { actions } = useAnimations(animations, foxRef)

//   useEffect(() => {
//     actions[fox.animation]?.reset().fadeIn(0.5).play();
//     return () => {
//       if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
//     };
//   }, [actions, fox.animation]);

//   return (
//     <group ref={foxRef} {...props} dispose={null} position={[0, 0, 0]} >
//       <group name="Scene">
//         <group 
//           name="Idle"
//           rotation={[0, -Math.PI / 1.9, 0]}
//           scale={0.01}
//         >
//           <skinnedMesh
//             name="Fox_Mesh"
//             geometry={nodes.Fox_Mesh.geometry}
//             material={materials.Fox}
//             skeleton={nodes.Fox_Mesh.skeleton}
//           />
//           <primitive object={nodes.Fox_Pelvis} />
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/assets/models/fox/Prueba2.glb");
