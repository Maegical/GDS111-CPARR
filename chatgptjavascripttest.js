let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function displayBoard() {
    console.clear();
    console.log(` ${board[0]} | ${board[1]} | ${board[2]} `);
    console.log('---|---|---');
    console.log(` ${board[3]} | ${board[4]} | ${board[5]} `);
    console.log('---|---|---');
    console.log(` ${board[6]} | ${board[7]} | ${board[8]} `);
}

function handleMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        displayBoard();

        if (checkWinner()) {
            console.log(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            console.log('It\'s a draw!');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            console.log(`Player ${currentPlayer}'s turn`);
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winningCombinations.some(combination =>
        board[combination[0]] !== '' &&
        board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]]
    );
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    displayBoard();
    console.log('Game reset. Player X\'s turn');
}

// Initial display
displayBoard();
console.log('Player X\'s turn. Use handleMove(index) to make a move.')