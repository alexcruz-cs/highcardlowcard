"use client";

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Button, Card, CardContent } from '@mui/material'

const generateCard = () => Math.floor(Math.random() * 13) + 1

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
        spread: 70,
        origin: { y: 0.6 }
      })
    }

    setResult(isCorrect ? 'Correct!' : 'Wrong')
    setGameState('result')
  }

  const playAgain = () => {
    setGameState('playing')
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-6">
          {gameState === 'start' && (
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6 text-purple-600">High Card Low Card</h1>
              <Button onClick={startGame}  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Play
              </Button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="text-center">
              <h2 className="text-xl mb-4">Is the card higher or lower?</h2>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-white">{visibleCard}</span>
                </div>
                <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-white">?</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => handleGuess('higher')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Higher
                </Button>
                <Button onClick={() => handleGuess('lower')} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                  Lower
                </Button>
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">{result}</h2>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-white">{visibleCard}</span>
                </div>
                <div className="w-24 h-36 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-4xl text-white">{hiddenCard}</span>
                </div>
              </div>
              <p className="mb-4">Score: {score}</p>
              <Button onClick={playAgain} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Play Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}