// 1. If Statement
// statement that evaluates an expression coercing it to a boolean value of true or false
// and executes the appropriate block of code // if (true) {then do this action}
if (2 > 1) {
    console.log("It is true!"); // prints => It is true!
}

// 2. Else-if Statement
// an additional if statement chained to the first by way of an else
if (-1 > 1) {
    console.log("That doesn't seem right."); // won't execute as the condition is false
} else if (-1 > -3) {
    console.log("Math works!"); // prints => Math works! // this path ran because the
    // else if evaluated to true
}

// 3. Else Statement
// when everything above is false, then this path will be taken
var color = 'purple'
if (color === 'orange') {
    console.log('The color is orange.');
} else if (color === 'red') {
    console.log('The color is red');
} else {
    console.log('I don\'t have your color on file.'); // this statement executes
    // as all other paths returned false
}


// 4. Switch Statement
// similar to an if else statement in that it attempts to match the value
// of an expression to a case clause in order to execute the appropriate statement
// cases are separated by breaks
switch (color) {
    case 'orange':
        console.log('It is orange.'); // false
        break;
    case 'red':
        console.log('It is red.'); // false
        break;
    case 'purple':
        console.log('It is purple.'); // this one will execute as its path is true
        break;
    default:
        console.log('color is not found');
}
