// 1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
/*
* First we must declare and name the function using a keyword:
* function myFunction() {
*   execute function code written here
* }
*
* to execute a function it must be called or invoked:
* myFunction();
*/

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
/*
* A function may have parameters which are variables that will work within the function:
* function add(param1, param2) { // 2 parameters
*    return param1 + param2;
* }
*
* var sum = add(x, y); // 2 arguments that map 1 to 1 onto the parameters
*
* arguments come from outside the function and get passed into
* the function as parameters that are then used within the function
* parameters are scoped to the function
*/

// 3. What’s the syntax for a NAMED function?
/*
* function myFunction(parameter) {
*     execute code here
* }
*
* myFunction(argument);
*/


// 4. How do we assign a function to a variable?
// sum = add(x, y); // use the assignment operator
// sum will have the value returned by the add function


// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
/*
* inputs are specified during the function call in the form of arguments
* the output is what gets returned by the functions return statement
* function add(param1, param2) {
*    return param1 + param2;
* }
*
* var sum = add(x, y); // x and y are inputs and sum will take the value of the return statement's expression
*/


// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.


// 7. Closures: Functions form closures around the data they house.
// If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!