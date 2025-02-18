import React from 'react';

function Result({ gameStatus }) {
  // Checking the game status to determine the result message
  if (gameStatus === 'won') {
    return <div className="result">Congratulations, You Won!</div>; // Display message when the player wins
  } else if (gameStatus === 'lost') {
    return <div className="result">Sorry, You Lost!</div>; // Display message when the player loses
  }

  return null; // If no game status, return null to render nothing
}

export default Result;
