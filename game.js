var prompt = require('prompt');

prompt.start();

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

// prompt.get(['username', 'email'], function (err, result) {
//   // Log the results.
//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  email: ' + result.email);
// });


var drawOnBoard = function (location, draw) {
  board[location] = draw;
};


var showBoard = function () {
  console.log('\n' +
    ' ' + board[1] + ' : ' + board[2] + ' : ' + board[3] + '\n' +
    ' ---------\n' +
    ' ' + board[4] + ' : ' + board[5] + ' : ' + board[6] + '\n' +
    ' ---------\n' +
    ' ' + board[7] + ' : ' + board[8] + ' : ' + board[9] + '\n');
};


var isNumber = function (val) {
  var x;
  if( isNaN(val)) {
    return false;
  }
  x = parseFloat(val);
  return (x | 0) === x;
};


var checkMove = function (location) {
  return isNumber(location) && board[location] === ' ' && (location >= 0 && location <=8);
};


var winArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
];


var checkWin = function (player) {
  var i, j, drawCount;

  for(i = 0; i < winArray[i].length; i++) {
    drawCount = 0;
    for(j =0; j < winArray[j].length; j++) {
      if(board[winArray][i][j] === player ) {
        drawCount++;
      }
      if(drawCount === 3) {
        return true;
      }
    }
  }
  return false;
};


var playerturn = function (player) {
  console.log('Your turn : ' + player);
  prompt.start();
  prompt.get(['location'], function (err, result) {
    if(checkMove(result.location) === true) {
      drawOnBoard(result.location, player);
      showBoard();
      if(checkWin(player)) {
        console.log('Winner');
        return;
      }
      if(player === 'X') {
        playerturn('O');
      } else {
        playerturn('X');
      }
    } else {
      console.log('not a valid input, try again .. ');
      playerturn(player);
    }
  });
};

console.log('Game begins: \n' +
  ' 1 : 2 : 3 \n' +
  ' --------- \n' +
  ' 4 : 5 : 6 \n' +
  ' --------- \n' +
  ' 7 : 8 : 9 \n');

playerturn('X');

module.exports = board;
module.exports = drawOnBoard;
module.exports = showBoard;
