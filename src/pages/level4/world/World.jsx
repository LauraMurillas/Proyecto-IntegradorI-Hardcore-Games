import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function World(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/castilloV2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.076, 2.125, -0.167]} scale={[1.16, 2, 1.227]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Torre} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['ladrillo.001']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Asta} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials['Bandera.001']} />
      </group>
      <group position={[0.067, 4.58, -0.131]} scale={[1.41, 0.398, 1.685]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[0.07, 0.823, -13.255]} scale={[3.172, 0.797, 0.845]}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.ladrillo} />
      </group>
      <group position={[1.937, 1.42, 4.239]} scale={[3.172, 0.797, 0.845]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.ladrillo} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.Bandera} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials.fondo} />
      </group>
      <group
        position={[4.893, 0.919, -0.006]}
        rotation={[0, 1.568, 0]}
        scale={[3.172, 0.797, 0.845]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials.ladrillo} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube007_3.geometry} material={materials.Bandera} />
        <mesh geometry={nodes.Cube007_4.geometry} material={materials['Material.004']} />
      </group>
      <group
        position={[0.546, 0.927, -4.695]}
        rotation={[Math.PI, -0.009, Math.PI]}
        scale={[3.172, 0.797, 0.845]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.ladrillo} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube008_3.geometry} material={materials.Bandera} />
        <mesh geometry={nodes.Cube008_4.geometry} material={materials['Material.004']} />
      </group>
      <group
        position={[-4.219, 0.908, -0.259]}
        rotation={[Math.PI, -1.559, Math.PI]}
        scale={[3.172, 0.797, 0.845]}>
        <mesh geometry={nodes.Cube009.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.ladrillo} />
        <mesh geometry={nodes.Cube009_2.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube009_3.geometry} material={materials.Bandera} />
        <mesh geometry={nodes.Cube009_4.geometry} material={materials['Material.004']} />
      </group>
      <mesh
        geometry={nodes.Puerta001.geometry}
        material={materials['Material.005']}
        position={[-0.23, 0.751, 7.405]}
        scale={[0.851, 1.154, 0.236]}
      />
      <mesh
        geometry={nodes.Torus003.geometry}
        material={materials['Material.006']}
        position={[-0.05, 1.663, -0.676]}
        rotation={[-1.475, 0.386, -1.424]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Torus001.geometry}
        material={materials['Material.006']}
        position={[1.819, -1.292, -2.221]}
        rotation={[-1.531, -0.248, -1.398]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Torus002.geometry}
        material={materials['Material.006']}
        position={[0.033, 5.227, 2.029]}
        rotation={[-0.152, 1.261, -1.529]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Torus004.geometry}
        material={materials['Material.006']}
        position={[2.04, 5.282, -0.159]}
        rotation={[-3.085, -0.629, 1.502]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Torus005.geometry}
        material={materials['Material.006']}
        position={[-1.922, 5.284, -0.148]}
        rotation={[-3.085, -0.629, 1.502]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Torus006.geometry}
        material={materials['Material.006']}
        position={[0.095, 5.193, -2.329]}
        rotation={[-0.152, 1.261, -1.529]}
        scale={0.124}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials['Material.007']}
        position={[0.305, 0.134, 1.751]}
        scale={[18.677, 5.239, 19.384]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.009']}
        position={[12.195, 1.495, 6]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.009']}
        position={[8, 2, -4]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.009']}
        position={[9.195, 1.495, 0]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials['Material.009']}
        position={[11.195, 1.495, -3]}
      />
      <mesh
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.009']}
        position={[10.195, 1.495, 3]}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.009']}
        position={[9.195, 1.495, 6]}
      />
      <mesh
        geometry={nodes.Cylinder007.geometry}
        material={materials['Material.009']}
        position={[13.195, 1.495, 6]}
      />
      <mesh
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.009']}
        position={[-7.805, 1.495, -3]}
      />
      <mesh
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.009']}
        position={[-8.805, 1.495, -5]}
      />
      <mesh
        geometry={nodes.Cylinder010.geometry}
        material={materials['Material.009']}
        position={[-11.805, 1.495, -5]}
      />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={materials['Material.009']}
        position={[-10.805, 1.495, 3]}
      />
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={materials['Material.009']}
        position={[-6.805, 1.495, 1]}
      />
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={materials['Material.009']}
        position={[5.195, 0.495, 6]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={materials['Material.009']}
        position={[-10.805, 1.495, -4]}
      />
      <mesh
        geometry={nodes.Cylinder015.geometry}
        material={materials['Material.009']}
        position={[-10.805, 1.495, 0]}
      />
      <mesh
        geometry={nodes.Cylinder016.geometry}
        material={materials['Material.009']}
        position={[7.195, 0.495, 5]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder017.geometry}
        material={materials['Material.009']}
        position={[7.195, 1.495, 3]}
      />
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={materials['Material.009']}
        position={[12.195, 1.495, 0]}
      />
      <mesh
        geometry={nodes.Cylinder019.geometry}
        material={materials['Material.009']}
        position={[12.195, 1.495, 3]}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials['Material.009']}
        position={[10.195, 1.495, 5]}
      />
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials['Material.009']}
        position={[7.195, 0.495, 1]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={materials['Material.009']}
        position={[6.195, 2.495, 2]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder023.geometry}
        material={materials['Material.009']}
        position={[-5.805, 0.495, 4]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder024.geometry}
        material={materials['Material.009']}
        position={[-3.805, 0.495, 6]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder025.geometry}
        material={materials['Material.009']}
        position={[-6.805, 1.495, -6]}
      />
      <mesh
        geometry={nodes.Cylinder026.geometry}
        material={materials['Material.009']}
        position={[-10.805, 1.495, -2]}
      />
      <mesh
        geometry={nodes.Cylinder027.geometry}
        material={materials['Material.009']}
        position={[-5.805, 0.495, 6]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder028.geometry}
        material={materials['Material.009']}
        position={[-8.805, 0.495, 2]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder029.geometry}
        material={materials['Material.009']}
        position={[-5.805, 0.495, -2]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder030.geometry}
        material={materials['Material.009']}
        position={[-5.805, 0.495, -1]}
        scale={0.528}
      />
      <mesh
        geometry={nodes.Cylinder031.geometry}
        material={materials['Material.009']}
        position={[-8.805, 1.495, -1]}
      />
      <mesh
        geometry={nodes.Cylinder032.geometry}
        material={materials['Material.009']}
        position={[-7.805, 1.495, 4]}
      />
      <mesh
        geometry={nodes.Cylinder033.geometry}
        material={materials['Material.009']}
        position={[-12.805, 1.495, -1]}
      />
      <mesh
        geometry={nodes.Cylinder034.geometry}
        material={materials['Material.009']}
        position={[-4.805, 1.495, -7]}
      />
      <mesh
        geometry={nodes.Cylinder035.geometry}
        material={materials['Material.009']}
        position={[0.195, 1.495, -7]}
      />
      <mesh
        geometry={nodes.Cylinder036.geometry}
        material={materials['Material.009']}
        position={[7.195, 2.495, -1]}
      />
      <mesh
        geometry={nodes.Cylinder037.geometry}
        material={materials['Material.009']}
        position={[10.195, 1.495, -5]}
      />
      <mesh
        geometry={nodes.Cylinder038.geometry}
        material={materials['Material.009']}
        position={[7.195, 1.495, -6]}
      />
      <mesh
        geometry={nodes.Cylinder039.geometry}
        material={materials['Material.009']}
        position={[9.195, 1.495, -7]}
      />
      <mesh
        geometry={nodes.Cylinder040.geometry}
        material={materials['Material.009']}
        position={[6.195, 1.495, -8]}
      />
      <mesh
        geometry={nodes.Cylinder041.geometry}
        material={materials['Material.009']}
        position={[3.195, 1.495, -8]}
      />
      <mesh
        geometry={nodes.Cylinder042.geometry}
        material={materials['Material.009']}
        position={[5.195, 1.495, -11]}
      />
      <mesh
        geometry={nodes.Cylinder043.geometry}
        material={materials['Material.009']}
        position={[9.195, 1.495, -10]}
      />
      <mesh
        geometry={nodes.Cylinder044.geometry}
        material={materials['Material.009']}
        position={[7.195, 1.495, -10]}
      />
      <mesh
        geometry={nodes.Cylinder045.geometry}
        material={materials['Material.009']}
        position={[-6.805, 1.495, -8]}
      />
      <mesh
        geometry={nodes.Cylinder046.geometry}
        material={materials['Material.009']}
        position={[-3.805, 1.495, -9]}
      />
      <mesh
        geometry={nodes.Cylinder047.geometry}
        material={materials['Material.009']}
        position={[-9.805, 1.495, -7]}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/world/castilloV2.glb')