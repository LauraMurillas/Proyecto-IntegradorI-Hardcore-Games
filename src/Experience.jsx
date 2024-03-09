import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Floor = () => {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[100, 10, 1]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
    );
  };
const Experience = () => {
    const boxRef = useRef(null);
    
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
    });

    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 20, 5]} />
            <OrbitControls makeDefault />
            <Floor />
            <mesh ref={boxRef} position={[0, 3, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"purple"} />
            </mesh>
        </>

    )
}

export default Experience;
