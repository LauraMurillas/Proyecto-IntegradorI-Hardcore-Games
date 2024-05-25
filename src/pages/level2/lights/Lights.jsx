import { Color } from "three";

const Lights = () => {
    return (
        <>
            <ambientLight
                intensity={4}  // Reducir la intensidad de la luz ambiental
            />
            <directionalLight
                castShadow={true}
                position={[0, 0, 0]}
                color={new Color("#555555")}  // Cambiar el color a un tono más oscuro
                intensity={2}  // Reducir la intensidad
                shadow-mapSize={[2048, 2048]}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <spotLight
                position={[0, 0, 0]}  // Posicionar la luz puntual
                color={new Color("#8899FF")}  // Tono frío
                intensity={0.5}  // Ajustar la intensidad
                distance={100}
                angle={Math.PI / 4}
                penumbra={0.5}
                decay={2}
                castShadow={true}
                shadow-mapSize={[2048, 2048]}
            />
        </>
    );
}

export default Lights;
