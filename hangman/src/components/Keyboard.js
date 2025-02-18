import React from 'react';

function Keyboard({ onGuess }) {
  // Alphabet array containing all letters from a to z
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {/* Map through each letter of the alphabet and create a button for each letter */}
      {alphabet.map((letter) => (
        <button 
          key={letter} // Unique key for each button (based on the letter)
          onClick={() => onGuess(letter)} // Trigger the onGuess function with the letter when clicked
          className="btn btn-secondary" // Style the button with Bootstrap's secondary button class
        >
          {letter} {/* Display the letter on the button */}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
