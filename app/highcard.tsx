"use client"

// imports
import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';


// Generates Card Between 1 and 10
const generateCard = () => Math.floor(Math.random() * 10) + 1


// High Card Low Card Function
export default function HighCardLowCard()
{
  //Game States and Variables
  const [gameState, setGameState] = useState('start')
  const [visibleCard, setVisibleCard] = useState(0)
  const [hiddenCard, setHiddenCard] = useState(0)
  const [result, setResult] = useState('')
  const [score, setScore] = useState(0)

  // Use Effect - Used to Run Logic After Render
  useEffect(() => 
  {
    if (gameState === 'playing')
    {
      // Generate Cards
      let visibleCard = generateCard();
      let hiddenCard = generateCard();

      // Checks If Cards Are The Same, Rerolls Card
      //while (hiddenCard === visibleCard)
      //{
      //  hiddenCard = generateCard();
      //}

      // Set Cards
      setVisibleCard(visibleCard);
      setHiddenCard(hiddenCard);
    }

    }, [gameState])

    // Sets Game State to 'playing'
  const startGame = () =>
    {
      setGameState('playing')
      setScore(0)
    }
  
    // Handles User's Guess
    const handleGuess = (guess: 'higher' | 'lower' | 'equal') =>
    {
      const isCorrect =
      (guess === 'higher' && hiddenCard > visibleCard) || 
      (guess === 'lower' && hiddenCard < visibleCard) || 
      (guess === 'equal' && hiddenCard == visibleCard)

      if (isCorrect)
      {
        // Higher Guess
      if (guess === 'higher')
        {
          // Set Score
          setScore(score + 1)
  
          // Throws Confetti
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
          })
          
        }
  
        else if(guess === 'lower')
        {
          // Set Score
          setScore(score + 1)
  
          // Throws Confetti
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
          })
  
        }
  
        else if (guess === 'equal')
        {
          // Set Score
          setScore(score + 3)
  
          // Throws Confetti
          confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
            shapes: ['star'],
          })
            
        }
      }

      if (!isCorrect)
      {
        setScore(score - 1)
      }

  
      // Sets Result
      setResult(isCorrect ? 'Correct!' : 'Wrong!')
  
      // Sets Game State to 'result' - To Show Results
      setGameState('result')
  
    }

    // Sets Game State to 'start' - Start Screen
    const startScreen = () =>
    {
      setGameState('start')
    }

    // Sets Game State To 'playing' - Plays Game
    const playAgain = () =>
    {
      setGameState('playing')
    }


    // Sets Game State to 'rules' - Shows Game Rules
    const gameRules = () =>
    {
      setGameState('rules')
    }

    // Return...
    return(
      <div className = "min-h-screen flex flex-col items-center justify-center">
        <div className = "p-6 ">
          {gameState === 'start' && (
            <div>
              <div className="text-center">
                <h1 className = "text-9xl font-bold text-gray-100 stroke-gray-800">HIGH CARD,</h1>
                <h2 className = "text-8xl font-bold mb-7 text-gray-100 stroke-gray-800">LOW CARD?</h2>  
                <button onClick={startGame} className = "bg-[#2A9FC5] transition-all duration-500 hover:bg-[#076B91] font-bold text-white py-3 px-8 text-xl rounded">PLAY</button>
              </div>

              <button onClick={gameRules} className = "absolute left-10 bottom-10 w-16 h-16 rounded-full text-2xl bg-gray-800 font-bold hover:bg-[#2A9FC5]">?</button>

              

            </div>
            )}

          {gameState === 'rules' && (
            <div className = "text-center">
              <div className = "bg-gray-800 bg-opacity-[.7] rounded-3xl">
                <h2 className = "text-4xl font-bold py-8">How To Play</h2>
                  <div className = "flex justify-center space-x-4 py-3">
                    <div className = "w-32 h-48 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                      <span className = "text-9xl text-white">5</span>
                    </div>
                    <div className = "w-32 h-48 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white animate-wiggle">
                      <span className = "text-9xl text-white">?</span>
                    </div>
                  </div>
              <div className = "px-10 py-10">
                <h1 className = "text-3xl py-2">Higher, Lower, Equal!?</h1>
                <div className = "">
                  <p className = "text-xl">At the start of each match, a random card between 1-10 is played.</p>
                  <p className = "text-xl"> Try to guess whether the [?] card is higher, lower, or equal.</p>
                  <p className = "text-xl">A correct guess for higher or lower will get you 1 point.</p>
                  <p className = "text-xl pb-1">A correct guess for equal will get you 3 points.</p>
                </div>
                <h1 className = "text-3xl pt-4 py-1">Careful Though!</h1>
                <p className = "text-xl">An incorrect guess will cost you 1 point.</p>
              </div>
              </div>
              
              <button onClick={startScreen} className = "absolute left-10 bottom-10 w-16 h-16 rounded-full text-2xl bg-[#C52A5F] font-bold hover:bg-[#910734]">X</button>
            </div>

          )}

          {gameState === 'playing' && (
            // 
            <div className = "text-center">
              <div className = "bg-gray-800 bg-opacity-[.6] rounded-3xl px-9">
                <h2 className = "text-4xl font-bold mb-4 p-6">Is The Card Higher Or Lower?</h2>
              </div>

              <div className = "flex justify-center space-x-4 mb-6 p-6">
                <div className = "w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                  <span className = "text-9xl text-white">{visibleCard}</span>
                </div>
                <div className = "w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white animate-wiggle">
                  <span className = "text-9xl text-white"> ? </span>
                </div>
              </div>
            
              <div className = "flex justify-center space-x-4 ">
                <button onClick={() => handleGuess('higher')} className = " w-48 bg-[#C52A5F] hover:bg-[#761939] text-white font-bold py-2 px-4 rounded">HIGHER</button> 

                <button onClick={() => handleGuess('lower')} className = "w-48 bg-[#2A9FC5] hover:bg-[#076B91] text-white font-bold py-2 px-4 rounded">LOWER</button>

                <button onClick={() => handleGuess('equal')} className = "w-48 bg-[#46aa50] hover:bg-[#277025] text-white font-bold py-2 px-4 rounded">EQUAL</button>
              </div>

              <button onClick ={() => startScreen()} className = "fixed left-10 top-7 text-xl font-bold hover:text-[#2A9FC5]">High Card, Low Card?</button>

              <h1 className = "absolute right-10 bottom-10 bg-gray-800 bg-opacity-[.7] rounded-3xl p-6 font-bold">Score: {score}</h1>
            </div>
          )}

          {gameState === 'result' && (
            <div className = "text-center">
              <div className = "bg-gray-800 bg-opacity-[.7] rounded-3xl">
                <h2 className = "text-4xl font-bold mb-4 p-6">{result}</h2>
              </div>

              <div className = "flex justify-center space-x-4 mb-6 p-6">
                <div className = "w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white">
                  <span className = "text-9xl text-white">{visibleCard}</span>
                </div>
                
                {/*Hidden Card*/}
                <div className = "relative transition duration-500 [transform-style:preserve-3d] [transform:rotateY(180deg)]">

                  {/*Front of Card*/}
                  <div className = "w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white [backface-visibility:hidden]">
                    <h1 className = "text-9xl text-white">?</h1>
                  </div>

                  {/*Back of Card*/}
                  <div className = "absolute inset-0 w-56 h-80 bg-gray-800 rounded-3xl flex items-center justify-center border-8 border-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h1 className="text-9xl text-white">{hiddenCard}</h1>
                  </div>
                </div>
              </div>

              <button onClick={playAgain} className = "bg-[#2A9FC5] hover:bg-[#076B91] text-white font-bold py-2 px-4 rounded">Play Again?</button>
              <h1 className = "absolute right-10 bottom-10 bg-gray-800 bg-opacity-[.7] rounded-3xl p-6 font-bold">Score: {score}</h1>

              <button onClick ={() => startScreen()} className = "fixed left-10 top-7 text-xl font-bold hover:text-[#2A9FC5]">High Card, Low Card?</button>
            </div>
            
          )}
        </div>
      </div>

      
    ) 

}

