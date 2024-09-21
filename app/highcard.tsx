"use client";

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Button, CardContent } from '@mui/material'

const generateCard = () => Math.floor(Math.random() * 10) + 1

export default function HighCardLowCard() {
  const [gameState, setGameState] = useState('start') // 'start', 'playing', 'result'
  const [visibleCard, setVisibleCard] = useState(0)
  const [hiddenCard, setHiddenCard] = useState(0)
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (gameState === 'playing') {
      setVisibleCard(generateCard())
      setHiddenCard(generateCard())
    }
  }, [gameState])

  const startGame = () => {
    setGameState('playing')
    setScore(0)
  }

  const handleGuess = (guess: 'higher' | 'lower') => {
    const isCorrect = 
      (guess === 'higher' && hiddenCard > visibleCard) ||
      (guess === 'lower' && hiddenCard < visibleCard)

    if (isCorrect) {
      setScore(score + 1)
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 }
      })
    }

    setResult(isCorrect ? 'Correct!' : 'Sorry, That Is Wrong')
    setGameState('result')
  }

  const playAgain = () => {
    setGameState('playing')
  }


  return (    
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white transition-colors duration-500">
      <CardContent className="p-6">
          {gameState === 'start' && (
            
            <div className="text-center">
              <h1 className="text-9xl font-bold mb-2 text-gray-100">HIGH CARD</h1>
              <h2 className="text-6xl font-bold mb-6 text-gray-100">LOW CARD</h2>
              <Button onClick={startGame}  className="bg-pacificblue hover:bg-darkblue text-white font-bold py-2 px-4">
                Play
              </Button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 p-6">Is The Card Higher Or Lower?</h2>
              <div className="flex justify-center space-x-4 mb-6 p-6">
                <div className="w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                  <span className="text-9xl text-white">{visibleCard}</span>
                </div>
                <div className="w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white animate-wiggle">
                  <span className="text-9xl text-white">?</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => handleGuess('higher')} className="bg-pacificred hover:bg-darkred text-white font-bold py-2 px-4 rounded">
                  Higher
                </Button>
                <Button onClick={() => handleGuess('lower')} className="bg-pacificblue hover:bg-darkblue text-white font-bold py-2 px-4 rounded">
                  Lower
                </Button>
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{result}</h2>
              <div className="flex justify-center space-x-4 mb-6 p-6">
                <div className="w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                  <span className="text-9xl text-white">{visibleCard}</span>
                </div>
                <div className="w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                  <span className="text-9xl text-white">{hiddenCard}</span>
                </div>
              </div>
              <Button onClick={playAgain} className="bg-pacificblue hover:bg-darkblue text-white font-bold py-2 px-4 rounded">
                Play Again?
              </Button>
              <div>
              <p className="p-6">Score: {score}</p>
              </div>
            </div>
          )}
        </CardContent>
    </div>
  )
}