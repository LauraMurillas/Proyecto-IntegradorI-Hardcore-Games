import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier"

export default function World() {
    const { nodes, materials } = useGLTF("/assets/models/world/castilloV2.glb")
   
   /// const map = useMovements();

    return (
      
        
            <group name="Scene">
              <mesh
                name="Landscape"
                castShadow
                receiveShadow
                geometry={nodes.Landscape.geometry}
                material={materials['Material.001']}
                position={[-39.005, 2.733, -7.294]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[3.35, 3.96, 7]}
              />
              <mesh
                name="Plane"
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.002']}
                position={[0, 1, -3]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={[-3.02, -1.35, -7.62]}
              />
              <mesh
                name="Landscape001"
                castShadow
                receiveShadow
                geometry={nodes.Landscape001.geometry}
                material={materials['Material.004']}
                position={[12.995, 2.733, -8.294]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[4.32, 3.96, 6]}
              />
              <group
                name="objStairs"
                position={[-15.31, 2.45, 2.36]}
                rotation={[1.641, -0.001, 3.124]}
                scale={[8, 8, 8.03]}>
                <mesh
                  name="objStairs_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.objStairs_1.geometry}
                  material={materials.lambert7SG}
                />
                <mesh
                  name="objStairs_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.objStairs_2.geometry}
                  material={materials.lambert6SG}
                />
              </group>
              <group
                name="objStairs001"
                position={[-14, 2, -17]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={8}>
                <mesh
                  name="objStairs001_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.objStairs001_1.geometry}
                  material={materials['lambert7SG.001']}
                />
                <mesh
                  name="objStairs001_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.objStairs001_2.geometry}
                  material={materials['lambert6SG.001']}
                />
              </group>
            </group>
          
        
    );
}

useGLTF.preload("/assets/models/world/castilloV2.glb");

