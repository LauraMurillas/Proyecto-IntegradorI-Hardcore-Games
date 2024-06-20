/* Configuracion principal de los checkpoints implementados para cada nivel
 El usuario podrá recoger checkpoints a medida que avanza en los niveles
 para poder rescatar su partida en caso de que pierda todas sus vidas 
 o ingrese a jugar de una partida anterior.
*/

import React, { useEffect, useState, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Checkpoints(props) {
  const { nodes, materials } = useGLTF('/assets/models/ringCheckpoint/checkpointObject.glb')
  const { numberCheckpoint, itsTaken, handleOnTakeCheckpoint, position } = props
  const refCheckpoint = useRef()
  const [isInRange, setIsInRange] = useState(false)

  const onTakenCheckpoint = (event) => {
    if (event.keyCode === 69 && isInRange) {
      const position = {
        x: refCheckpoint.current.translation().x,
        y: 10,
        z: refCheckpoint.current.translation().z - 2,
      }
      handleOnTakeCheckpoint(numberCheckpoint, position)
      setIsInRange(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onTakenCheckpoint)
    return () => {
      window.removeEventListener('keydown', onTakenCheckpoint)
    }
  }, [isInRange])

  const onEnterCollisionCheckpoint = (e) => {
    if (e.rigidBodyObject.name === 'Fox') {
      if (itsTaken) {
        setIsInRange(false)
        // dialogs.handleOpenDialogTaken()
        return
      }

      // dialogs.handleOpenDialogInRange()
      setIsInRange(true)
    }
  }

  const onExitCollisionCheckpoint = (e) => {
    if (e.rigidBodyObject.name === 'Fox') {
      // dialogs.closeDialog()
      setIsInRange(false)
    }
  }

  return (
    <group {...props} dispose={null}>
      <RigidBody
        type="fixed"
        name="Checkpoint"
        onCollisionEnter={onEnterCollisionCheckpoint}
        onCollisionExit={onExitCollisionCheckpoint}
        ref={refCheckpoint}
        {...props}
      >
        <group position={position} rotation={[0, 0, -1.567]} scale={[0.1, 0.5, 0.5]}>
          <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Stone} />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.StoneGold}
          />
        </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/ringCheckpoint/checkpointObject.glb')

