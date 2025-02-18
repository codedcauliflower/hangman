import React from 'react';

function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display">
      {/* Loop through each letter in the word */}
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {/* If the letter is guessed, display the letter; otherwise, display an underscore */}
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
