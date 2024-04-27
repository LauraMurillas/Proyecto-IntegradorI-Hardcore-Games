import { useEffect } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Importa OrbitControls de three.js

export default function Controls({ map }) {
    const { camera, gl } = useThree();
    const [sub, get] = useKeyboardControls();

    useEffect(() => {
        const controls = new ThreeOrbitControls(camera, gl.domElement); // Crea una instancia de OrbitControls
        
        const unsubscribe = sub(
            (state) =>
                state.forward ||
                state.backward ||
                state.leftward ||
                state.rightward ||
                state.rotateLeft ||
                state.rotateRight, // Utilizamos las teclas forward, backward, leftward, rightward, rotateLeft y rotateRight
            (pressed) => {
                const { forward, backward, leftward, rightward, rotateLeft, rotateRight } = get();
                const moveSpeed = 0.1; // Velocidad de movimiento de la cámara
                const rotateSpeed = Math.PI / 180; // Velocidad de rotación de la cámara (en radianes)

                // Movimiento hacia adelante y hacia atrás
                if (forward) {
                    camera.translateZ(-moveSpeed);
                }
                if (backward) {
                    camera.translateZ(moveSpeed);
                }

                // Movimiento hacia la izquierda y hacia la derecha
                if (leftward) {
                    camera.translateX(-moveSpeed);
                }
                if (rightward) {
                    camera.translateX(moveSpeed);
                }

                // Rotación de la cámara
                if (rotateLeft) {
                    camera.rotateY(rotateSpeed);
                }
                if (rotateRight) {
                    camera.rotateY(-rotateSpeed);
                }
            }
        );

        // Limpia los controles al finalizar
        return () => {
            controls.dispose();
            unsubscribe();
        };
    }, [camera, gl.domElement, sub, get]);

    return null; // No necesitamos un elemento visual para este componente
}
