// 1. Concatenation Operator
var myString = 'Hello'; // assignment operator
myString += ' everybody!'; // + is the concatenation operator
// this combines the strings on either side of the +.
console.log(myString); // prints => Hello everybody!

// 2. String Methods
/*
* String methods can manipulate strings in beneficial ways such as
* splitting a string into several smaller ones or joining smaller strings
* together. Changing cases could be useful as well.
*/

var splitMe = "Split me apart. Then put me back together again.";
var splitString = splitMe.split(' ');
console.log(splitString); // prints =>
/*
* [ 'Split',
*  'me',
*  'apart.',
*  'Then',
*  'put',
*  'me',
*  'back',
*  'together',
*  'again.' ]
*/
var backTogether = splitString.join(' ');
console.log(backTogether); // prints => Split me apart. Then put me back together again.

var capsLockProblem = 'I SHOULD NOT BE ALL IN UPPERCASE.';
var capsLockGone = capsLockProblem.toLowerCase();
console.log(capsLockGone); // prints => i should not be all in uppercase.
// capitalizing the first letter.
var fixed = capsLockGone.charAt(0).toUpperCase() + capsLockGone.slice(1);
console.log(fixed); // prints => I should not be all in uppercase.