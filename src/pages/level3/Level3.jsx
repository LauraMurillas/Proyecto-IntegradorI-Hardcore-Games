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
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Sound from "./abstractions/Sound";

export default function Level3() {
    const map = useMovements();
    const [audio] = useState(new Audio("./assets/sounds/mundoDuendes.mp3"));
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
        <KeyboardControls map={map}>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
                <Environments/>
                <Suspense fallback={null}>
                    <World scale={[10,10,10]}/>
                    <WelcomeText position={[0, 1, 2]} />
                </Suspense>
                <Controls/>
            </Canvas>   
        </KeyboardControls>
    )
}





