import { useGLTF } from "@react-three/drei"
import { CuboidCollider, CylinderCollider, RigidBody, interactionGroups } from "@react-three/rapier"

export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldSquidGames.glb")

    const Limits = () => {
        const { nodes } = useGLTF("/assets/models/world/WorldSquidGames.glb")
      
        const geometries = [
          nodes.Limit.geometry,
          nodes.Limit001.geometry,
          nodes.Limit002.geometry,
          nodes.Limit003.geometry,
          nodes.Limit004.geometry,
          nodes.Limit005.geometry,
          nodes.Limit006.geometry,
          nodes.Limit007.geometry,
          nodes.Limit008.geometry,
          nodes.Limit009.geometry,
          nodes.Limit010.geometry,
          nodes.Limit011.geometry,
          nodes.Limit012.geometry,
          nodes.Limit013.geometry,
        ]
      
        const transparentMaterial = useMemo(() => <meshPhongMaterial transparent />)
      
        return (
          <>
            {geometries.map((geometry, index) => (
              <mesh
                key={index}
                castShadow
                receiveShadow
                geometry={geometry}
                material={transparentMaterial}
              />
            ))}
          </>
        )
    }

    return (
        <group {...props} dispose={null}>
            <group>
                
                <RigidBody type="fixed" collisionGroups={interactionGroups(0)}>
                    <Limits />
                </RigidBody>
                <RigidBody colliders="trimesh" type="fixed">
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                </RigidBody>
                <RigidBody colliders="trimesh" type="fixed">
                    <mesh onClick={(e) => e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                </RigidBody>
                <RigidBody type="fixed" colliders={false}>
                        <mesh
                            onClick={(e) => e.stopPropagation()}
                            castShadow={true}
                            geometry={nodes.WoodenFence.geometry}
                            material={materials.woodMaterial}>
                            <CuboidCollider args={[0.2, 0.5, 47.5]} position={[-3.8, 0.5, -47]} />
                            <CuboidCollider args={[0.2, 0.5, 47.5]} position={[4.2, 0.5, -47]} />
                        </mesh>
                </RigidBody>
                <RigidBody colliders={false} type="fixed" >
                    <mesh onClick={(e) => e.stopPropagation()} geometry={nodes.Tree.geometry} material={materials.treeMaterial} position={[0, 0, -96]} />
                    <CylinderCollider args={[1, 0.5]} position={[0, 1, -96]} />
                </RigidBody>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

