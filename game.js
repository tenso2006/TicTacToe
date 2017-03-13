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

prompt.get(['username', 'email'], function (err, result) {
  // Log the results.
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});


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

