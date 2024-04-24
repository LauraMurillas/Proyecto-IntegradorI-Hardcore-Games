import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshLambertMaterial } from "three";
import { MeshDistanceMaterial } from "three";
import { meshMatcapMaterial } from "three";
import { meshNormalMaterial } from "three";
import { meshPhongMaterial, } from "three";
import { meshPhysicalMaterial } from "three";
import { meshToonMaterial } from "three";

const Floor = () => {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[100, 10, 1]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
    );
  };
  
 
  const MyAnimatedMesh = ({ position, color, animationType }) => {
    const meshRef = useRef();
  
    useFrame((state, delta) => {
      const time = state.clock.getElapsedTime(); // Tiempo transcurrido
      let yPosition = 0;
      if (animationType === "sine") {
        yPosition = position[1] + Math.sin(time); // Animación en seno
      } else if (animationType === "cosine") {
        yPosition = position[1] + Math.cos(time); // Animación en coseno
      }
      meshRef.current.position.y = yPosition;
    });
  
    return (
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={color} />
      </mesh>
    );
  };
  const MyMesh = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh2 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshDistanceMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh3 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshMatcapMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh4 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh5 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh6 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial color={color} />
      </mesh>
    );
  };

  const MyMesh7 = ({ position, color }) => {
    return (
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshToonMaterial color={color} />
      </mesh>
    );
  };

  /*const MeshWithMaterial = ({ position, color }) => {
    const ref = useRef();
  
    useFrame((state, delta) => {
      ref.current.rotation.x += 1 * delta;
    });
  
    return (
      <mesh ref={ref} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };
  <MeshWithDistanceMaterial position={[-2, 1, 0]} color="green" />
            <MeshWithMaterial position={[-1, 1, 0]} color="blue" />
            <MeshWithMaterial position={[0, 1, 0]} color="red" />
            <MeshWithMaterial position={[1, 1, 0]} color="yellow" />
            <MeshWithMaterial position={[2, 1, 0]} color="purple" />
            <MeshWithMaterial position={[3, 1, 0]} color="orange" />
            <MeshWithMaterial position={[4, 1, 0]} color="cyan" />
  */
            
const Experience = () => {
    /*const boxRef = useRef(null);
    
    useFrame(({clock}, delta)=>{
      console.log(clock.getElapsedTime)
      boxRef.current.position.y = Math.cos(clock.getElapsedTime());
      boxRef.current.position.x += 0.4 * delta;
    });*/

    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 20, 5]} />
            <OrbitControls makeDefault />
            <Floor />
            <MyAnimatedMesh position={[0, 5, 0]} color="red" animationType={"sine"}/>
            <MyMesh2 position={[3, 5, 0]} color="green" />
            <MyMesh3 position={[6, 5, 0]} color="blue" />
            <MyMesh4 position={[9, 5, 0]} color="yellow" />
            <MyMesh5 position={[12, 5, 0]} color="purple" />
            <MyMesh6 position={[15, 5, 0]} color="orange" />
            <MyMesh7 position={[18, 5, 0]} color="cyan" />
        </>

    )
}

export default Experience;
