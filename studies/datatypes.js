/*
* Data types are different kinds of data items, they are defined by the values they can take,
* and the operations that can be performed on them.
* JavaScript has many different kinds of data types.
*/

// 1. Number
// can be integer or floating point, positive or negative, and work with arithmetic expressions
var numberOfItems = 3;
var cost = 7.45;

// 2. String
// can be used as words or a series of characters enclosed by "" or ''
var leetString = '1337 H4xx0rz';
var item = "books";

// strings can be concatenated with the + operator and numbers can take arithmetic operations
var output = "Your " + numberOfItems + " " + item + " cost $" + numberOfItems * cost + ".";
console.log(output); // prints => Your 3 books cost $22.35.

// strings have a length property that returns the total number of characters
console.log(item.length); // prints => 5

// and individual characters can be accessed by index notation beginning with 0
/*
* Index   Value
* 0       b
* 1       o
* 2       o
* 3       k
* 4       s
*/
console.log(item[3]); // prints => k

// 3. Boolean
/*
* Booleans are specifically either true or false.
* They can be thought of as a toggle
* such as on/off, yes/no, true/false, and so on.
*/
var boolValue = true;
boolValue = false;

// 4. Array
// a collection of items known as elements enclosed within brackets [] that can grow indefinitely
var myArray = ["Hello", 42, "eep", true];

// arrays also have a length property similar to strings
console.log(myArray.length); // prints => 4

// methods can be applied to arrays to modify their contents such as push which adds
// a number of new elements to the back of the array
myArray.push(leetString);
console.log(myArray); // prints => ['Hello', 42, 'eep', true, '1337 H4xx0rz']

// 5. Object
/*
* Objects are a collection of properties which are key / value pairs
* that are enclosed within curly brackets {} and can grow indefinitely.
* Objects do not have a length property
* format is {key1: value1, key2: value2, moreKeys: moreValues}
*/
var myDogs = {Logan: 'rat terrier', Lilly: 'rat terrier/chihuahua'};

// accessing is done by [] or . notation
console.log(myDogs.Logan); // prints => rat terrier
console.log(myDogs['Lilly']); // prints => rat terrier/chihuahua

// adding can be done by dot operator or brackets
myDogs.Louis = 'poodle terrier';
myDogs["Polly"] = 'cat';
console.log(myDogs); // prints => 
/*
* {Logan: 'rat terrier',
* Lilly: 'rat terrier/chihuahua',
* Louis: 'poodle terrier',
* Polly: 'cat'}
*/

// use keyword delete to remove a property
delete myDogs.Polly;
console.log(myDogs); // prints =>
/*
* {Logan: 'rat terrier',
* Lilly: 'rat terrier/chihuahua',
* Louis: 'poodle terrier'}
*/

// 6. Function
/*
* Reusable lines of code that will likely be used more than once so they
* are encapsulated to save on typing the same thing over and over again which should
* reduce the likelihood of errors and cut down on overall program length.
* Functions have a name, arguments, parameters, and a return statement.
*/
function add(a, b) {
    return a + b;
}

// the above function adds 2 numbers which are symbolized by the parameters a and b
// and returns the result
// the function must be called in order to execute
var sum;
sum = add(-3, 7); // -3 and 7 are arguments that get passed to the parameters a and b respectively
console.log(sum); // prints => 4

// 7. undefined
var x;
// x has been declared but not initialized
console.log(x); // prints => undefined
// becuase x was not initialized it has a value of undefined, initializing x will give
// it a new value that is very much defined
x = 5;
console.log(x); // prints => 5

// 8. null
var noTypeOrValue = null;
console.log(noTypeOrValue); // prints => null

// null can be used to indicate an object should be present but no known object
// is yet relevant
// null is useful for indicating that the variable has no type or value presently

// 9. NaN
var imaginary = Math.sqrt(-1);
console.log(imaginary); // prints => NaN

// NaN means not a number
// if a number is expected but something else shows up NaN is returned


// 10. Infinity and -Infinity
/*
* The largest number that JavaScript can represent is 1.7976931348623157e+308 or 2^1024.
* Anything larger than that is to be treated as infinity which is represented by
* the Number.POSITIVE_INFINITY property.
* The smallest number that JavaScript can represent is -1.7976931348623157e+308.
* Anything smaller than that is to be treated as negative infinity which is represented by
* the Number.NEGATIVE_INFINITY property.
*/
var number = -1.7976931348623157e+308;
console.log(number * 2); // prints => -Infinity
number = 1.7976931348623157e+308;
console.log(number * 2); // prints => Infinity

// 11. What is the difference between primitive/simple and complex data types?
/*
* Simple/primitive data types are numbers, strings, booleans, NaN, undefined, and null.
* They are atomic and immutable which means that they don't hold other values and when operations
* are performed on simple values the values are not altered, instead they are replaced by new values.
*/
var myNumber = 324;
// if we want to raise the first digit to a 4 there is no operation to simply alter the first digit
// instead the number has to be preplaced by some operation
myNumber += 100; // adds 100 to 324 and returns a NEW value of 424
console.log(myNumber); // prints => 424

/*
* Complex data types are objects, arrays, and functions.
* They are collections of other values and are of indefinite size.
*/
var array = [1, 3, 2, 4, 5];
// as seen earlier this array can be altered by adding elements in with the push method
// if we want to fix the numerical order the elements can be adjusted as well
array.splice(1, 2, 2, 3);
console.log(array); // prints => [1, 2, 3, 4, 5]

/*
* Simple data types hold data of their own type (except for NaN which is classified as a type of number)
* while complex data types can hold any type (remember the array from section 4).
* A final difference is presented in section 12 below.
*/

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
/*
* Primitive/simple values are stored in a variable directly. They are passed to a function by copy meaning the value itself is passed.
*/
var m = 1;
var n = m; // the value stored in m is copied into n
n = 33.3; // changing n doesn't affect what is stored in m
console.log(m); // prints => 1

/*
* Complex values are passed by reference meaning that the variables are a reference that points to the value
* stored elsewhere in memory since complex values can be of any size.
*/
var animal = {Polly: 'dog'};
var myKitty = animal; // because the object could be any size animal contains a reference to the object
// now myKitty also points to the same object as animal
myKitty.Polly = 'cat'; // changing the value of myKitty affects the object and anything else that points to (references) that object
console.log(animal); // prints => {Polly: 'cat'}
