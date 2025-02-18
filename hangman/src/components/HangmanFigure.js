import React from 'react';

// This component renders the Hangman figure based on the number of incorrect guesses
function HangmanFigure({ incorrectGuesses }) {
  // Array of SVG stages representing the hangman figure's progression
  const hangmanStages = [
    // Stage 1: Scaffold (no parts of the body drawn yet)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
    </svg>, 
    
    // Stage 2: Head (circle represents the head of the person)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
    </svg>,
    
    // Stage 3: Body (line added for the body)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
      <line x1="100" y1="70" x2="100" y2="120" stroke="black" strokeWidth="4" /> {/* Body */}
    </svg>,
    
    // Stage 4: Left Arm (left arm added)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
      <line x1="100" y1="70" x2="100" y2="120" stroke="black" strokeWidth="4" /> {/* Body */}
      <line x1="100" y1="120" x2="80" y2="160" stroke="black" strokeWidth="4" /> {/* Left arm */}
    </svg>,
    
    // Stage 5: Right Arm (right arm added)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
      <line x1="100" y1="70" x2="100" y2="120" stroke="black" strokeWidth="4" /> {/* Body */}
      <line x1="100" y1="120" x2="80" y2="160" stroke="black" strokeWidth="4" /> {/* Left arm */}
      <line x1="100" y1="120" x2="120" y2="160" stroke="black" strokeWidth="4" /> {/* Right arm */}
    </svg>,
    
    // Stage 6: Left Leg (left leg added)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
      <line x1="100" y1="70" x2="100" y2="120" stroke="black" strokeWidth="4" /> {/* Body */}
      <line x1="100" y1="120" x2="80" y2="160" stroke="black" strokeWidth="4" /> {/* Left arm */}
      <line x1="100" y1="120" x2="120" y2="160" stroke="black" strokeWidth="4" /> {/* Right arm */}
      <line x1="100" y1="120" x2="80" y2="180" stroke="black" strokeWidth="4" /> {/* Left leg */}
    </svg>,
    
    // Stage 7: Right Leg (right leg added, character fully drawn)
    <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="190" stroke="black" strokeWidth="4" /> {/* Scaffold pole */}
      <line x1="50" y1="10" x2="100" y2="10" stroke="black" strokeWidth="4" /> {/* Horizontal bar */}
      <line x1="100" y1="10" x2="100" y2="30" stroke="black" strokeWidth="4" /> {/* Rope */}
      <circle cx="100" cy="50" r="20" stroke="black" strokeWidth="4" fill="transparent" /> {/* Head */}
      <line x1="100" y1="70" x2="100" y2="120" stroke="black" strokeWidth="4" /> {/* Body */}
      <line x1="100" y1="120" x2="80" y2="160" stroke="black" strokeWidth="4" /> {/* Left arm */}
      <line x1="100" y1="120" x2="120" y2="160" stroke="black" strokeWidth="4" /> {/* Right arm */}
      <line x1="100" y1="120" x2="80" y2="180" stroke="black" strokeWidth="4" /> {/* Left leg */}
      <line x1="120" y1="160" x2="140" y2="180" stroke="black" strokeWidth="4" /> {/* Right leg */}
    </svg>,
  ];

  // Returns the hangman stage based on the number of incorrect guesses
  return hangmanStages[incorrectGuesses];
}

export default HangmanFigure;
