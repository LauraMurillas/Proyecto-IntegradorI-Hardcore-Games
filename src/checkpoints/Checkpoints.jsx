/* Configuracion principal de los checkpoints implementados para cada nivel
 El usuario podrá recoger checkpoints a medida que avanza en los niveles
 para poder rescatar su partida en caso de que pierda todas sus vidas 
 o ingrese a jugar de una partida anterior.
*/

import React, { useEffect, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Checkpoints = (props) => {
  const { numberCheckpoint, itsTaken, handleOnTakeCheckpoint, dialogs } = props

  // Importamos el modelo GLB
  const { nodes, materials } = useGLTF('/assets/models/ringCheckpoint/MagicRing.glb');

  const refCheckpoint = useRef()

  const [isInRange, setIsInRange] = useState(false)

  // Cuando el jugador recoge el checkpoint muestra un mensaje en pantalla
  // Y recoge el id y la posicion del checkpoint
  const onTakeCheckpoint = (event) => {
    if (event.keyCode === 69 && isInRange) {
      const position = {
        x: refCheckpoint.current.translation().x,
        y: 10,
        z: refCheckpoint.current.translation().z - 2,
      }

      handleOnTakeCheckpoint(numberCheckpoint, position)
      setIsInRange(false)
      dialogs.handleOpenDialogTakeIt()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onTakeCheckpoint)
    return () => {
      window.removeEventListener('keydown', onTakeCheckpoint)
    }
  }, [isInRange])

  // Cuando el jugador se encuentra con un checkpoint muestra un mensaje en pantalla
  const onEnterCollisionCheckpoint = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      if (itsTaken) {
        setIsInRange(false)
        dialogs.handleOpenDialogTaken()
        return
      }

      dialogs.handleOpenDialogInRange()
      setIsInRange(true)
    }
  }


  const onExitCollisionCheckpoint = (e) => {
    if (e.rigidBodyObject.name === 'playerBody') {
      dialogs.closeDialog()
      setIsInRange(false)
    }
  }


  return (
    <RigidBody
      type="fixed"
      onCollisionEnter={onEnterCollisionCheckpoint}
      onCollisionExit={onExitCollisionCheckpoint}
      ref={refCheckpoint}
      {...props}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint002_1.geometry}
        material={itsTaken ? materials.StoneGold : materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Checkpoint002_2.geometry}
        material={itsTaken ? materials.StoneGold : materials.Stone}
      />
    </RigidBody>
  )
}

useGLTF.preload('/assets/models/ringCheckpoint/MagicRing.glb');


export default Checkpoints