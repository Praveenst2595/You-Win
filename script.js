document.addEventListener("DOMContentLoaded", function() {
    const boardSize = 5;
    const board = [];
    const gameBoard = document.getElementById('game-board');

    // Initialize the game board
    function initBoard() {
        gameBoard.innerHTML = '';
        for (let i = 0; i < boardSize; i++) {
            board[i] = [];
            for (let j = 0; j < boardSize; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                gameBoard.appendChild(square);
                board[i][j] = square;
            }
        }
        // Call the function to show the win condition
        showWinPopup();
    }

    // Function to turn off all lights and show a "You win!" pop-up
    function showWinPopup() {
        // Turn off all lights
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                board[i][j].classList.add('is-off');
            }
        }
        // Show the "You win!" pop-up
        alert('You win!');
    }

    initBoard();
});
