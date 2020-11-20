document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
});

function handleClick(event) {
  // console.log(event.target);
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {

    setTimeout(() => {
      alert('o jogo acabou');
    }, 10);
  }

  updateSquare(position);
}

function reset() {
  updateSquaresReset();
  playerTime = 0;
  gameOver = false;
}

function updateSquaresReset() {
  let squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];
    // console.log(symbol)
    if (symbol != '') {
      square.innerHTML = '';
      board[position]='';
    }
  })
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}