import { useGame } from '../context/WordleContext';
import { WORD_LENGTH } from '../config/config'
import styles from '../styles/Grid.module.css'

const Grid = () => {
  const { attempts, displayLetter, wordSolution } = useGame()
  const letters = Array(WORD_LENGTH).fill('')

  function checkLetterStatus(attemptIndex: number, charIndex: number) {
    if (attempts[attemptIndex][charIndex] === wordSolution[charIndex]) {
      return styles.correctposition
    }
    else if (wordSolution.includes(attempts[attemptIndex][charIndex])) {
      return styles.incorrectposition
    } else {
      return styles.notpresent
    }
  }

  return (
    <>
      { attempts.map((attempt, attemptIndex) => (
        <div key={attemptIndex} className={styles.wrapper}>
          {
            letters.map((char, charIndex) => (
              <div
                key={charIndex}
                className={`${styles.letter} ${attempts[attemptIndex] !== undefined && checkLetterStatus(attemptIndex, charIndex)}`}>
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