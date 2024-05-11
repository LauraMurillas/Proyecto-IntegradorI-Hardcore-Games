import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls, Sparkles } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect, useRef } from "react";
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
import HealthBar from '../../components/HealthBar'; // Importa el componente HealthBar


export default function Level1() {
    const map = useMovements();
    const audioRef = useRef(new Audio("./assets/sounds/BosqueEncantadoAudio.mp3"));
    const [userInteracted, setUserInteracted] = useState(false);
    const [volume, setVolume] = useState(0.5); // Estado para almacenar el volumen del juego, valor inicial al 50%
    const [lives, setLives] = useState(3); // Número de vidas del personaje
    const maxLives = 5; // Número máximo de vidas
  
/**para l introduccion del juego */
const [showInstructions, setShowInstructions] = useState(false);

const toggleInstructions = () => {
  setShowInstructions(!showInstructions);
};


    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = volume;
        
        if (userInteracted && audio.paused){
            audio.play();
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [userInteracted, volume]);


    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const playAudio = () => {
        setUserInteracted(true);
    }

    const muteAudio = () => {
        setUserInteracted(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }


  
    const decreaseLives = () => {
      // Reducir las vidas del personaje
      if (lives > 0) {
        setLives((prevLives) => prevLives - 1);
      }
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
               
               <div>
             <HealthBar lives={lives} maxLives={maxLives} />
      </div><div>
        {/* Botón para reducir las vidas del personaje (solo para demostración) */}
        <button onClick={decreaseLives}style={{position: 'absolute', top: '20px', right: '300px', zIndex: '9999'}}>Reducir Vidas</button>
      </div>
     
      <button onClick={toggleInstructions}style={{position: 'absolute', top: '20px', right: '200px', zIndex: '9999'}}>Instrucciones</button>
      
      {showInstructions && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleInstructions}>&times;</span>
            <p>En este nivel, Gabriel debe esquivar plantas venenosas y otros insectos. Utiliza las teclas de dirección para moverte.</p>
          </div>
        </div>
      )}
                <KeyboardControls map={map} >
                 <Canvas
                    camera={{
                        position: [0, 1, 0]
                    }}
                >
                    <Perf position="top-left" />
                    <Suspense fallback={null}>
                        <Lights />
                        <Environments />
                        <Sparkles 
                            color="white"
                            count={150}
                            size={10}
                            fade={false}
                            speed={4}
                            scale={20}
                        />
                        <Physics debug={false}>
                            <World2 />
                            <Ecctrl
                                camInitDis={-3}
                                camMaxDis={-3}
                                maxVelLimit={5} 
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
             
            {/* Control de volumen */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '9999' }}>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    disabled = {!userInteracted}
                />
            </div>
            {/* Boton para iniciar la reprodución del audio */}
            <button onClick={playAudio} style={{position: 'absolute', top:'50px', right: '10px', zIndex: '9999'}} disabled={userInteracted}>
            </button>

            {/* Boton para detener la reproducción del audio */}
            <button
            onClick={muteAudio} style={{position: 'absolute', top: '80px', right: '10px', zIndex: '9999'}}>

            </button>



        </div>
    )
}
