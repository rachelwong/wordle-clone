import React from 'react'
import { useGame } from '../context/WordleContext';
import Keyboard from './Keyboard'

const Wordle = () => {
  const { currentAttempt } = useGame()

  return (
    <div>
      <h1>CurrentAttempt{currentAttempt}</h1>
      <Keyboard />
    </div>
  )
}

export default Wordle