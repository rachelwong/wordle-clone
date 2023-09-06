import { useGame } from '../context/WordleContext';
import { WORD_LENGTH } from '../config/config'
import styles from '../styles/Grid.module.css'

const Grid = () => {
  const { currentAttempt, attempts, currentTurn, displayLetter } = useGame()
  const letters = Array(WORD_LENGTH).fill('')

  return (
    <>
      { attempts.map((attempt, attemptIndex) => (
        <div key={attemptIndex} className={styles.wrapper}>
          {
            letters.map((char, charIndex) => (
              <div key={charIndex} className={styles.letter}>
                <span>
                  { displayLetter(attemptIndex, charIndex) }
                </span>
              </div>
            ))
          }
        </div>
        ))
      }
    </>
  )
}

export default Grid