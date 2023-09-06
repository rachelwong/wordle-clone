import React from 'react'
import { useGame } from '../context/WordleContext';
import Keyboard from './Keyboard'
import Grid from './Grid'

const Wordle = () => {
  const { currentAttempt, attempts, currentTurn } = useGame()

  return (
    <div>
      <h1>CurrentAttempt{JSON.stringify(currentAttempt)}</h1>
      <h2>Attempts: {JSON.stringify(attempts)}</h2>
      <h3>CurrentTurn: {currentTurn}</h3>
      <Grid />
      <Keyboard />
    </div>
  )
}

export default Wordle