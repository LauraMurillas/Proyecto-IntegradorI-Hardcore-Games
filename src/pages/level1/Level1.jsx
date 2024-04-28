import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls, Sparkles } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import World2 from "./world/World2";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import Fox from "./characters/fox/Fox";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

export default function Level1() {
    const map = useMovements();
    const [audio] = useState(new Audio("./assets/sounds/BosqueEncantadoAudio.mp3"));
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
        <KeyboardControls map={map} >
            <Canvas
                camera={{
                    position: [0, 1, 0]
                }}
            >
                {/* <Perf position="top-left" /> */}
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Sparkles 
                        color="white"
                        count={100}
                        size={4}
                        fade={false}
                        speed={1.5}
                        scale={20}
                    />
                    <Physics debug={false}>
                        <World2 />
                        <Ecctrl
                            camInitDis={-3}
                            camMaxDis={-3}
                            maxVelLimit={10} 
                            jumpVel={4} 
                            position={[0,5,0]}
                        >
                            <Fox />
                        </Ecctrl>
                    </Physics>
                    <WelcomeText position={[0, 1, -2]} />
                    <Controls />
                </Suspense>

            </Canvas>
        </KeyboardControls>

    )
}
