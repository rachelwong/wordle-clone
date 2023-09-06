import React from 'react'
import { useGame } from '../context/WordleContext';
import Keyboard from './Keyboard'
import Grid from './Grid'
import Status from './Status'

const Wordle = () => {
  const { currentAttempt, attempts, currentTurn, wordSolution, isCorrect } = useGame()
  const isOpen = isCorrect || (currentTurn === 6);

  return (
    <div>
      <h1>Solution {wordSolution}</h1>
      <h3>isCorrect { isCorrect }</h3>
      <h1>CurrentAttempt{JSON.stringify(currentAttempt)}</h1>
      <h2>Attempts: {JSON.stringify(attempts)}</h2>
      <h3>CurrentTurn: {currentTurn}</h3>
      <Grid />
      <Keyboard />
      <Status isOpen={ isOpen } />
    </div>
  )
}

export default Wordle