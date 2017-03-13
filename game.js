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




