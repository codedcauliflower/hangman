import React, { useState } from 'react';
import Hangman from './components/Hangman'; // Import Hangman component
import HelpModal from './components/HelpModal'; // Import HelpModal component
import './App.css'; // Import the stylesheet for the App

function App() {
  // State to control whether the help modal is visible
  const [showHelp, setShowHelp] = useState(false);

  // Function to toggle the visibility of the help modal
  const toggleHelp = () => setShowHelp(!showHelp);

  return (
    <div className="App">
      <header>
        {/* Display the title of the game */}
        <h1>Hangman Game</h1>
        
        {/* Button to toggle help modal */}
        <button onClick={toggleHelp} className="btn btn-info">Help</button>
      </header>
      
      {/* Render the Hangman game component */}
      <Hangman />
      
      {/* Conditionally render the HelpModal if showHelp is true */}
      {showHelp && <HelpModal toggleHelp={toggleHelp} />}
    </div>
  );
}

export default App;
