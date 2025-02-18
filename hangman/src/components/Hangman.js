import React, { useState } from 'react';
import WordDisplay from './WordDisplay'; // Component to display the word with guessed letters
import Keyboard from './Keyboard'; // Component for the on-screen keyboard
import Result from './Result'; // Component to show the game result (won or lost)
import HangmanFigure from './HangmanFigure'; // Component to display the hangman figure based on incorrect guesses
import { Button } from 'react-bootstrap'; // Button from react-bootstrap for restart functionality

function Hangman() {
  // List of words to choose from
  const words = ['javascript', 'react', 'hangman', 'coding', 'development'];
  
  // State variables
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]); // Randomly chosen word
  const [guessedLetters, setGuessedLetters] = useState([]); // Stores all the guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Tracks incorrect guesses
  const [gameStatus, setGameStatus] = useState(null); // 'won' or 'lost' to track game state

  // Function to handle letter guesses
  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return; // Prevent duplicate guesses
    
    setGuessedLetters([...guessedLetters, letter]); // Add guessed letter to guessed letters array
    
    // If the letter is not in the word, increment incorrect guess count
    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses + 1);
    }

    // Check if all letters in the word are guessed
    if (word.split('').every((char) => guessedLetters.includes(char) || char === letter)) {
      setGameStatus('won'); // Player won
    }

    // Check if the player has exceeded the maximum incorrect guesses
    if (incorrectGuesses >= 6) {
      setGameStatus('lost'); // Player lost
    }
  };

  // Function to reset the game
  const handleReset = () => {
    setWord(words[Math.floor(Math.random() * words.length)]); // Choose a new word randomly
    setGuessedLetters([]); // Reset guessed letters
    setIncorrectGuesses(0); // Reset incorrect guess count
    setGameStatus(null); // Reset game status
  };

  return (
    <div className="game-container">
      {/* Display the word with guessed letters */}
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      
      {/* Display the hangman figure based on incorrect guesses */}
      <HangmanFigure incorrectGuesses={incorrectGuesses} />
      
      {/* Display the keyboard and handle letter guesses */}
      <Keyboard onGuess={handleGuess} />
      
      {/* Show game result (won or lost) */}
      <Result gameStatus={gameStatus} />
      
      {/* Restart the game on button click */}
      <Button onClick={handleReset} className="btn btn-primary">Restart Game</Button>
    </div>
  );
}

export default Hangman;
