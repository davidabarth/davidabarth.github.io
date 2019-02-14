/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
console.log(myVariable); // prints => 1

var myVariable = true;
console.log(myVariable); // prints => true

myVariable = "someString";
console.log(myVariable); // prints => someString

// 4. var, let, const //
// variables can be reassigned with var and let but are fixed with const
var changeMe = 1;
changeMe = 2;
console.log(changeMe); // prints => 2

let message = "Hello!";
message = "Hi there!";
console.log(message); // prints => Hi there!

const pi = 3.14159; // must be initialized at declaration
console.log(pi); // prints => 3.14159

/*
* Constants are great to use when they represent a fixed value that has no need to be changed
* such as a mathematical constant or other value that neither users nor the application
* should change.
*/

/*
* Additionally var, let, and const have different scopes.
* var has global and local scopes
* variables declared with var at the global level are available globally, locally, and within blocks
* in this context blocks refers to if and loop blocks of code
* variables declared with var at the local level are limited to local availability which includes
* local blocks (functions)
* variables declared with var in blocks are available both within and outside of the blocks, which
* in turn, are either in the global or local environment
*
* let and const have block scope availability meaning that if they are declared in a block,
* they are limited in availability to that block and will not be recognized outside of that block
* let and const are similarly limited in scope to functions just like var
*/

// 5. Hoisting //
/* var declarations are hoisted while let and const declarations are not
* This means that when the interpreter first runs and before execution, all var
* declarations will be made before anything executes. Var declarations are considered
* declared at the top of their scope.
* They may not be initialized before they are used however and if referenced before initialization,
* will return the value undefined.
* let and const are not hoisted and will only be declared in standard line by line order of execution.
* referencing a let or const before declaration throws a reference error.
*/