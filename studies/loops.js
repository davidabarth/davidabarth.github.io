// 1. While, for, and for-in loops
/*
* Loops execute code a set number of times allowing for efficient execution of code
* without the need for lots and lots of similar typing
* Loops will run until a termination condition in the form of an expression that
* evaluates to a boolean condition of false is met
*
* while loop:
* while (this expression is still true) {
*    do stuff here
*    make a subtle change to the expression above that brings termination one step closer
*}
*
* for loop:
* for (starting value; end condition; modify value) {
*    run this code again until the end condition evaluates to false
*}
*
* for in loop: (good for objects)
* for (information to reference the keys in the object) {
*    run through the object
*}
*/

// 2. Looping any number of times, forward counting up to some limit, backward counting down to 0
var number = 1;
var someLimit = 11;
while (number < someLimit) {
    console.log(number); // prints => 1 through 10
    number++;
}

for (let count = 8; count > -1; count--) {
    console.log(count); // prints => 8 through 0
}

// 3. Loop over an Array, forwards and backwards
var myArray = [2, 3, 5, 7, 11];
// looping forwards
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // prints => all elements of the array in order
}

// looping backwards
for (let i = myArray.length -1; i > -1; i--) {
    console.log(myArray[i]); // prints => all elements of the array in reverse order
}

// 4. Loop over an Object
var myDogs = {
    Logan: 'rat terrier',
    Lilly: 'rat terrier/chihuahua',
    Louis: 'poodle terrier'
};
for (var key in myDogs) {
    console.log(key); // prints => all the keys
    console.log(myDogs[key]); // prints => all the values
}
