import { useGame } from '../context/WordleContext';
import Keyboard from './Keyboard'
import Grid from './Grid'
import Status from './Status'
import { TURNS } from '../config/config'

const Wordle = () => {
  const {  currentTurn, isCorrect } = useGame()
  const isOpen = isCorrect || (currentTurn === TURNS);

  return (
    <div>
      <Grid />
      <Keyboard />
      <Status isOpen={ isOpen } />
    </div>
  )
}

export default Wordle