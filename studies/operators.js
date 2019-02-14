// 1. Assignment operators
var x = 3; // x is declared and assigned the value 3 by =, the assignment operator
x *= 2; // x is assigned the value of itself times 2
/*
* = is the assignment operator though other operations can be performed in 
* conjunction with it in order to assign the values on the right into the
* variable on the left
*/
console.log(x); // prints => 6

// 2. Arithmetic operators
var y = 2 + 3; // +, -, *, /, and % are the basic arithmetic operators
y++;
console.log(y); // prints => 6 (5 + 1) as the ++ increments y by 1
console.log(y%5); // prints => 1 (6 / 5 has a remainder of 1)


// 3. Comparison operators
// compare 2 values and return a boolean true or false
console.log(2 > y); // prints => false
console.log(2 * 7 > y); // prints => true
console.log(2 <= y); // prints => true
console.log(6 === y); // prints => true as 6 is strictly equal to y's value
console.log(1 != '1'); // prints => false as != means not equal and number 1
// and string '1' are converted to the same type for the comparison
console.log(1 === '1'); // prints => false as number 1 and string '1' are not
// strictly equal
console.log('6' == y); // prints => true since the type conversion makes
// string '6' equal to y which stores the number 6

// 4. Logical operators
// && logical AND, || logical OR, ! logical NOT aka the bang operator
console.log(2 > 1 && 1 > -1); // prints => true
/* both conditions must be true to evaluate to true */

console.log(3 < -4 || 3 < 4); // prints => true
/* either condition can be true to evaluate to true */

console.log(!true); // prints => false
/*
* ! flips the truth value of whatever follows it
* in other words if not true
*/

// 5. Unary operators (!, typeOf, -)
// typeof returns a string that indicates what type the unevaluated operand is
console.log(typeof 1); // prints => number
console.log(typeof 'what am I?'); // prints => string
console.log(typeof (1 < 2)); // prints => boolean

// ! flips the truthiness of a value
console.log(!false); // prints => true, read like not false
console.log(!!false); // prints => false, read like not not false

// - is the negative operator
var i = 3;
console.log(-i); // prints => -3


// 6. Ternary operator (a ? b : c)
var number = 6;
var result = (number > 4 ? "The true path." : "The false path.");
console.log(result); // prints => The true path.
/*
* The ternary operator takes 3 operands a, b, and c.
* a evaluates to a boolean of true or false
* if a is true then the code block b executes
* if a is false then the code block c executes
* very similar to an if else statement
*/