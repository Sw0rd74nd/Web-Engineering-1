let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;
let cells = document.querySelector("#board").children;

function makeMove(index) {
    // to be implemented

    if (!board[index]) {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        if (!checkWin()) {
            checkDraw();
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        }
    }
}

function resetGame() {
    // to be implemented
    for (let cell of cells) cell.innerText = '';
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
}

function checkWin() {

    if (
        (board[0] === board[1] && board[1] === board[2] && board[2] === currentPlayer) ||
        (board[3] === board[4] && board[4] === board[5] && board[5] === currentPlayer) ||
        (board[6] === board[7] && board[7] === board[8] && board[8] === currentPlayer) ||

        (board[0] === board[3] && board[3] === board[6] && board[6] === currentPlayer) ||
        (board[1] === board[4] && board[4] === board[7] && board[7] === currentPlayer) ||
        (board[2] === board[5] && board[5] === board[8] && board[8] === currentPlayer) ||

        (board[0] === board[4] && board[4] === board[8] && board[8] === currentPlayer) ||
        (board[2] === board[4] && board[4] === board[6] && board[6] === currentPlayer)
    ) {

        setTimeout(() => { alert('The Player ' + currentPlayer + ' wins!!'); }, 100);
        setTimeout(() => { resetGame(); }, 100);
        return true;
    }
    else {
        return false;
    }
}

function checkDraw() {
    if (!board.includes('') && !checkWin()) {
        setTimeout(() => { alert('ITS A DRAW'); }, 100);
        setTimeout(() => { resetGame(); }, 100);
    }

}