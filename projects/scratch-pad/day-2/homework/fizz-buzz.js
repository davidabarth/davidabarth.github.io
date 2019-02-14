// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

// find multiples of 3, 5, and 15
    var count = 1;
    while (count < 101) {
        if (count % 3 === 0 && count % 5 !== 0) {
            console.log("Fizz");
        } else if (count % 5 === 0 && count % 3 !== 0) {
            console.log("Buzz");
        } else if (count % 15 === 0) {
            console.log('FizzBuzz');
        } else {
        console.log(count);
        }
        count++;
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}