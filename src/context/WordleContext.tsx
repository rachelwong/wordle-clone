import { useContext, createContext, ReactNode, useState, useMemo } from 'react';
import { TURNS, WORD_LENGTH } from '../config/config'
import words from '../data/words.json';

type GameContextProps = {
  isCorrect: boolean
  wordSolution: string
  currentTurn: number
  currentAttempt: string[]
  attempts: ReactNode[]
  addLetterToCurrentAttempt: (char: string) => void
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
    return words[randomIndex].toUpperCase()
  }, [])

  function addLetterToCurrentAttempt(char: string) {
    if (currentAttempt.length <= WORD_LENGTH) setCurrentAttempt(prev => { return [...prev, char] })
    console.log('add', currentAttempt)
  }

  return <GameContext.Provider
    value={{ addLetterToCurrentAttempt, isCorrect, wordSolution, currentTurn, attempts, currentAttempt }}>
    {children}
  </GameContext.Provider>
}