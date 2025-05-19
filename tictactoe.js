const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';

function handleCellClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
        if (checkWin()) {
            message.textContent = `Player ${currentPlayer === 'X' ? 1 : 2} wins!`;
            disableCells();
        } else if (checkDraw()) {
            message.textContent = 'Draw!';
            disableCells();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.textContent = `Player ${currentPlayer === 'X' ? 1 : 2}'s turn (${currentPlayer})`;
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winConditions.some(condition => {
        return condition.every(index => cells[index].textContent === currentPlayer);
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

function disableCells() {
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick); // Reattach event listener
    });
    currentPlayer = 'X';
    message.textContent = 'Player 1\'s turn (X)';
}

// Attach event listeners to cells and reset button
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
