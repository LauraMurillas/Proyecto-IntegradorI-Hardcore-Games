import React, { useState } from 'react'
import Checkpoints from '../../../checkpoints/Checkpoints'
import { useDialog } from '../../../context/MensajeCheckpoint'
import { useAuth } from '../../../../providers/auth/AuthProvider'

const Checkpoints = () => {
  const { openDialog, closeDialog } = useDialog()
  const { checkpointLevelTwo, onTakeCheckpoint } = useAuth()

  const handleOnTakeCheckpoint = (numberCheckpoint, position) => {
    onTakeCheckpoint('level_two', numberCheckpoint, position)
  }

  const handleOpenDialogInRange = () => {
    openDialog(
        '!Este es un checkpoint! Presiona la tecla  <strong>E</strong> para guardarlo',
        'checkpoint'
    )
  }

  const handleOpenDialogTakeIt = () => {
    openDialog('¡Has guardado este checkpoint, podrás volver aquí en caso de perder tus vidas!')
  }

  const handleOpenDialogTaken = () => {
    openDialog('¡Ya has guardado este checkpoint!')
  }

  const dialogs = {
    handleOpenDialogInRange,
    handleOpenDialogTakeIt,
    handleOpenDialogTaken,
    closeDialog,
  }

  return (
    <>
      <Checkpoints
        numberCheckpoint={1}
        itsTaken={checkpointLevelTwo[1]}
        position={[-1, 0, -29.5]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />

      <Checkpoints
        numberCheckpoint={2}
        itsTaken={checkpointLevelTwo[2]}
        position={[-4, 0, -48]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
      <Checkpoints
        numberCheckpoint={3}
        itsTaken={checkpointLevelTwo[3]}
        position={[25, 0, -73]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />

      <Checkpoints
        numberCheckpoint={4}
        itsTaken={checkpointLevelTwo[4]}
        position={[-5.5, 0, -96]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
        dialogs={dialogs}
      />
    </>
  )
}

export default Checkpoint
