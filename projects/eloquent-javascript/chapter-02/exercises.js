
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  let hash = '#';
  while (hash.length < number + 1) {
    console.log(hash);
    hash += '#';
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  let count = 1;
  // find multiples of 3, 5, and 15
  while (count < 16) {
    // multiples of 3 only
    if (count % 3 === 0 && count % 5 !== 0) {
      console.log('fizz');
      // multiples of 5 only
    } else if (count % 5 === 0 && count % 3 !== 0) {
      console.log('buzz');
      // multiples of 3 and 5 (15)
    } else if (count % 15 === 0) {
      console.log('fizzbuzz');
    } else {
      console.log(count);
    }
    count++;
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let chessBoard = '';
  // add new row
  for (let i = 1; i < size + 1; i++) {
    // build row
    for (let j = 1; j < size + 1; j++) {
      // check to see what symbol to place
      if ((i + j) % 2 === 0) {
        // even so put space
        chessBoard += ' ';
      } else {
        // odd so put #
        chessBoard += '#';
      }
    }
      // add the next line
      chessBoard += '\n';
  }
  // let board = ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
  console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
