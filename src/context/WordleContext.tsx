import { useContext, createContext, ReactNode, useState, useMemo } from 'react';
import { TURNS, WORD_LENGTH } from '../config/config'
import words from '../data/words.json';

type GameContextProps = {
  isCorrect: boolean
  wordSolution: string[]
  currentTurn: number
  currentAttempt: string[]
  attempts: string[][]
  addLetterToCurrentAttempt: (char: string) => void
  submitCurrentAttempt: () => void
  displayLetter: (attemptIndex: number, charIndex: number) => string
  restart: () => void
}

type GameProviderProps = {
  children: ReactNode
}
const GameContext = createContext({} as GameContextProps)

export function useGame() {
  return useContext(GameContext)
}

export function GameProvider({ children }: GameProviderProps) {
  const [currentTurn, setCurrentTurn] = useState<number>(0)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [attempts, setAttempts] = useState([...Array(TURNS)])
  const [currentAttempt, setCurrentAttempt] = useState<string[]>([])

  const wordSolution = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex].toUpperCase().split("")
  }, [])

  function addLetterToCurrentAttempt(char: string) {
    if (currentAttempt.length <= WORD_LENGTH) setCurrentAttempt(prev => { return [...prev, char] })
  }

  function submitCurrentAttempt() {
    if (currentTurn < 6) {
      const tempAttempts = [...attempts]
      tempAttempts.splice(currentTurn, 1, currentAttempt)
      setAttempts([...tempAttempts])
      setCurrentTurn(prev => prev + 1)
      setCurrentAttempt([])
    }
    if (currentAttempt.join("") === wordSolution.join("")) {
      setIsCorrect(true)
    }
  }

  function restart() {
    setIsCorrect(false)
    setCurrentAttempt([])
    setCurrentTurn(0)
    setAttempts([])
  }

  function displayLetter(attemptIndex:number, charIndex:number) {
    return attempts[attemptIndex] !== undefined ? attempts[attemptIndex][charIndex] : (currentTurn === attemptIndex && currentAttempt[charIndex] !== undefined) ? currentAttempt[charIndex] : ''
  }

  return <GameContext.Provider
    value={{ addLetterToCurrentAttempt, isCorrect, wordSolution, restart, currentTurn, attempts, currentAttempt, submitCurrentAttempt, displayLetter }}>
    {children}
  </GameContext.Provider>
}