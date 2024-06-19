import React, { useState, useEffect } from 'react'
import { Checkpoints } from '../../../checkpoints/Checkpoints'
import { useAuth } from '../../../context/AutenticacionContext'

const Checkpoint = () => {
  const { onTakeCheckpoint, getCheckpoints } = useAuth()
  const [takenCheckpoints, setTakenCheckpoints] = useState({})

  useEffect(() => {
    const fetchCheckpoints = async () => {
      const checkpoints = getCheckpoints('level_one')
      setTakenCheckpoints(checkpoints)
    }
    fetchCheckpoints()
  }, [getCheckpoints])

  const handleOnTakeCheckpoint = async (numberCheckpoint, position) => {
    try {
      await onTakeCheckpoint('level_one', numberCheckpoint, position)
      setTakenCheckpoints((prevState) => ({
        ...prevState,
        [numberCheckpoint]: true,
      }))
      console.log(`Checkpoint ${numberCheckpoint} tomado en posición`, position)
    } catch (err) {
      console.error('Error tomando el checkpoint:', err)
    }
  }

  return (
    <>
      <Checkpoints
        numberCheckpoint={1}
        itsTaken={takenCheckpoints[1]}
        position={[5, 0.68, 5]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
      />
      <Checkpoints
        numberCheckpoint={2}
        itsTaken={takenCheckpoints[2]}
        position={[10, 0.68, -15]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
      />
      <Checkpoints
        numberCheckpoint={3}
        itsTaken={takenCheckpoints[3]}
        position={[14.2202, 0.68, 1.8868]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
      />
      <Checkpoints
        numberCheckpoint={4}
        itsTaken={takenCheckpoints[4]}
        position={[0, 0.68, -15]}
        handleOnTakeCheckpoint={handleOnTakeCheckpoint}
      />
    </>
  )
}

export default Checkpoint
