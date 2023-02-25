// string
let message = "hello";
consol.log(message);
// number
message = 123456;
consol.log(message);
// float
message = 12.345
consol.log(message);
// represent mathmatical infinity
alert( 1 / 0 ); // return Infinity string on alert box
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// string
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
// Boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")
// NULL
let age = null;
let age = 100;
// Undefined
// change the value to undefined
age = undefined;
alert(age); // "undefined"

// Object and symbols
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
