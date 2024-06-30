document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('game-board');
    const cells = document.querySelectorAll('.cell');
    const statusDisplay = document.getElementById('status');
    const resetButton = document.getElementById('reset-btn');

    let currentPlayer = 'X';
    let gameActive = true;
    let moves = 0;
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const handleCellClick = (e) => {
        const cell = e.target;
        const cellIndex = parseInt(cell.id.replace('cell-', ''));
        
        if (cell.textContent !== '' || !gameActive) return;

        cell.textContent = currentPlayer;
        moves++;

        if (checkWin()) {
            statusDisplay.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (moves === 9) {
            statusDisplay.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        }
    };

    const checkWin = () => {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return cells[index].textContent === currentPlayer;
            });
        });
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        gameActive = true;
        moves = 0;
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
    });
});
