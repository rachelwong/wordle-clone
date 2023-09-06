import { Button } from 'react-bootstrap'
import { useGame } from '../context/WordleContext'
import { WORD_LENGTH } from '../config/config'

const Keyboard = () => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split("")
  const { addLetterToCurrentAttempt, currentAttempt, isCorrect, submitCurrentAttempt } = useGame();
  const isDisabled = (currentAttempt.length === WORD_LENGTH) || isCorrect

  return (
    <div>
      { alphabets.map((char, index) => (
          <Button
            variant='primary'
            key={index + char}
            size='lg'
            disabled={ !!isDisabled }
            onClick={() => addLetterToCurrentAttempt(char)}
            className="me-2 mb-2">
            {char}
          </Button>
        ))
      }
      {currentAttempt.length === WORD_LENGTH && <div className='mt-3'>
        <Button variant='info' size='lg' onClick={submitCurrentAttempt}>
        Submit Attempt
      </Button></div>}
    </div>
  )
}

export default Keyboard