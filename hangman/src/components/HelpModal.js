import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap

function HelpModal({ toggleHelp }) {
  return (
    <Modal show={true} onHide={toggleHelp}> {/* Modal is always shown, and the toggleHelp function will close it */}
      <Modal.Header closeButton> {/* Modal header with a close button */}
        <Modal.Title>Hangman Game Rules</Modal.Title> {/* Title of the modal */}
      </Modal.Header>
      <Modal.Body>
        {/* Body of the modal, displaying the game rules */}
        <p>The objective of the game is to guess the correct word letter-by-letter.</p>
        <p>If you guess incorrectly six times, you lose the game!</p>
        <p>To win, you need to guess all the letters of the word correctly before running out of chances.</p>
      </Modal.Body>
      <Modal.Footer>
        {/* Footer with a button to close the modal */}
        <Button onClick={toggleHelp}>Close</Button> {/* Button to trigger the toggleHelp function to close the modal */}
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;
