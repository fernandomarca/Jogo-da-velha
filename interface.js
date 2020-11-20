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
     if(board[position] == 'o'){
       const message = `O jogo acabou! O Jogador: ${playerTime +1} \⚙ ganhou`;
        alert(message);
     } else{
       const message = `O jogo acabou! O Jogador: ${playerTime+1} \🛠 ganhou`;
        alert(message);
     }
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