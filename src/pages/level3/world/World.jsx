import { useGLTF } from "@react-three/drei";
import { CuboidCollider, CylinderCollider, RigidBody } from "@react-three/rapier";

export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/laberinto.glb");

    return (
        <group {...props} dispose={null}>
            <group>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve.geometry}
                material={materials['Material.001']}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/laberinto.glb");


