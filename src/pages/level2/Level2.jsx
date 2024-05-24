import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Dragon from './Dragon';

export default function Level2() {
  const [count,setCount]=useState(0)
  const [audio] = useState(new Audio("./assets/sounds/RuinasAudio.mp3"));
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
        // Una vez que el usuario haya interactuado con la página,
        // establecemos el estado userInteracted a true.
        setUserInteracted(true);
    };

    // Agregamos un evento de clic para detectar la interacción del usuario.
    document.addEventListener("click", handleInteraction);

    // Limpiamos el evento al desmontar el componente.
    return () => {
        document.removeEventListener("click", handleInteraction);
    };
}, []);

useEffect(() => {
    // Reproducir el sonido si el usuario ha interactuado con la página.
    if (userInteracted) {
        audio.loop = true;
        audio.play();
    }

    return () => {
        // Detener el sonido cuando el componente se desmonta.
        audio.pause();
        audio.currentTime = 0;
    };
}, [userInteracted]);

  return (
    
    <>
       <Canvas>
        <ambientLight />
        <OrbitControls/>
        <Suspense fallback={null}>
          <World />
        </Suspense>
        <Dragon position={[0, 0, 0]} />
           </Canvas>

    </>
  );
}
