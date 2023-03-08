## Table Of Content
- [Primitive](#Primitive)
- [Closures](#Closures) 
- [Execution Context](#Execution-Context)
- [Variables(var,let,const)](#Variables(var,let,const))
- [Array & methods](#Array-&-methods)
- [Objects + methods](#Objects-+-methods)
- [Error Handling](#Error-Handling)
- [Strick Mode](#Strict-Mode)
- [Timeout & Interval](#Timeout-&-Interval)

# Primitive
### In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

#### All primitives are immutable; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. The language does not offer utilities to mutate primitive values.

## Undefined
##### undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

```js
let x; //create a variable but assign it no value

console.log(`x's value is ${x}`); //logs "x's value is undefined"
```
## Symbol
##### Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

### To create a new primitive Symbol, you write `Symbol()` with an optional string as its description:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

## BigInt
##### In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format

# Closures
#### A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

# Execution Context
- In JavaScript, an execution context refers to the environment in which code is executed. It consists of variables, functions, and objects that are available at a particular point in time during the execution of a program.

- Every time a function is called in JavaScript, a new execution context is created. This context contains a reference to the function being executed, as well as its arguments and local variables. It also has access to the outer environment, which is the context in which the function was defined.

The execution context can be divided into two types:

  - Global Execution Context: This is the outermost context and is created when the script is first loaded. It includes all the global variables and functions that are defined in the script.

  - Function Execution Context: This context is created when a function is called. It includes all the local variables and arguments passed to the function, as well as any nested functions that are called within the function.

- The JavaScript runtime maintains a stack of execution contexts called the "call stack". When a function is called, a new execution context is added to the top of the stack, and when the function returns, the context is removed from the stack. This allows JavaScript to keep track of the order in which functions are called and executed.

**Understanding execution context is important in JavaScript because it helps developers understand how variables and functions are scoped, how closures work, and how the call stack operates. It also helps developers diagnose and debug errors that occur during program execution.**


# Variables(var,let,const)

- Let
  - Block Scope
  ```js
  function hello(){
    // block scope
    let message = "hello"
    console.log(message)
  }
  
  if(true){
  // block Scope
    let ans  = 10;
    console.log(ans);
  }
  
  // if try to console outside it gave error
  console.log(message)
  console.log(hello)
  ```
  `Uncought RefrenceError : message is not defined.`
  
  - we can chanage the data or update the data using let keyword.
  ```js
  let language;
  language = "javascript";
  console.log(language)
  ```
- Const
  - Block Scope
  - we cannot change or update the value/data by using const keyword.
  ```js
  const second = 60;
  second = 30;
  console.log(second)
  ```
  `Uncaught TypeError: Assignment to constant variable.`
  
 - Var
  - Funciton Scope
  ```js
  fucntion hello(){
    var new = "hello"
    console.log(new);
  }
  
  if(true){
    var age = 10;
    console.log(age)
  }
  
  // if try to console outside of function
  console.log(new)
  
  // no error on age variable because var is function scope not block scope
  console.log(age)
  ```
  `Uncaught ReferenceError: new is not defined`

# Operatures

# Array & methods
JavaScript provides a variety of methods for manipulating arrays. Here are some of the most commonly used array methods in JavaScript:

- concat() - `Concatenates two or more arrays into a new array.`
- join() - `Joins all elements of an array into a string.`
- pop() - `Removes the last element of an array and returns that element.`
- push() - `Adds one or more elements to the end of an array and returns the new length of the array.`
- shift() - `Removes the first element of an array and returns that element.`
- unshift() - `Adds one or more elements to the beginning of an array and returns the new length of the array.`
- reverse() - `Reverses the order of the elements in an array.`
- slice() - `Returns a shallow copy of a portion of an array into a new array.`
- splice() - `Changes the contents of an array by removing or replacing existing elements and/or adding new elements.`
- sort() - `Sorts the elements of an array in place.`
- indexOf() - `Returns the first index at which a given element can be found in an array.`
- lastIndexOf() - `Returns the last index at which a given element can be found in an array.`
- forEach() - `Executes a provided function once for each array element.`
- map() - `Creates a new array with the results of calling a provided function on every element in the calling array.`
- filter() - `Creates a new array with all elements that pass the test implemented by the provided function.`
- reduce() - `Executes a provided function for each value of the array (from left-to-right) and returns a single value.`
- reduceRight() - `Executes a provided function for each value of the array (from right-to-left) and returns a single value.`

# Error Handling
Error handling is an important part of any programming language, and JavaScript provides several ways to handle errors in your code. Here are some of the most common ways to handle errors in JavaScript:

- `try/catch statement` : The try/catch statement is used to handle exceptions (errors) that occur in a block of code. The try block contains the code that might throw an exception, and the catch block handles the exception that was thrown.
- `throw statement` : The throw statement is used to throw an exception (error) in a block of code.
- `finally statement` : The finally statement is used to execute a block of code after a try/catch block, regardless of whether an exception was thrown or not.
```js
try {
  // Code that might throw an exception
} catch (error) {
  // Code to handle the exception
} finally {
  // Code to execute regardless of whether an exception was thrown or not
}
```
- `window.onerror event` : The window.onerror event is triggered when an unhandled exception occurs in JavaScript code. You can use this event to log errors or display a custom error message to the user. 
```js
window.onerror = function(message, url, line, column, error) {
  // Code to handle the error
};
```
- `try/catch/finally with async/await` : When using async/await syntax, you can use a combination of try/catch/finally statements to handle errors in asynchronous code.
```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Code to handle the data
  } catch (error) {
    // Code to handle the error
  } finally {
    // Code to execute regardless of whether an exception was thrown or not
  }
}
```

# Strick Mode
"Strict mode" is a feature of JavaScript that allows developers to opt in to a set of restrictions and changes to the default behavior of the language. When you use strict mode, the JavaScript engine enforces stricter rules for variable declaration, function declaration, and other parts of the language. Here are some of the key features of strict mode:

- Strict mode enforces the use of var, let, or const to declare variables. In non-strict mode, you can omit the keyword var and create a global variable by simply assigning a value to a variable name. Strict mode prevents this behavior, which can help prevent naming conflicts and improve code clarity.

- In strict mode, all variables and functions must be declared before they are used. In non-strict mode, it is possible to use variables or functions before they are declared, but this can lead to hard-to-debug errors.

- In strict mode, attempting to assign a value to a read-only property or object will throw an error. This can help prevent accidental overwriting of important properties or objects.

- Strict mode also prevents the use of some language features that are considered problematic, such as with statements, which can make it hard to reason about scope, and eval(), which can execute arbitrary code and be a security risk.

```js
"use strict";

function myFunction() {
  // code in strict mode here
}
```

# Timeout & Interval
In JavaScript, setTimeout() and setInterval() are functions that allow you to delay the execution of code or repeatedly execute code at a specified interval

**settimeout()**
-  setTimeout() function will be executed after a delay of 2 seconds.

```js
console.log('Start');
setTimeout(() => {
  console.log('Delayed log');
}, 2000); // The function inside the setTimeout() will execute after 2 seconds (2000 milliseconds)
console.log('End');
```

**setinterval()**
- setInterval() function will be executed repeatedly at an interval of 1 second until the count variable is greater than 5. Once the count variable is greater than 5, the clearInterval() function is called to stop the execution of the code inside the setInterval() function.

```js
let count = 0;

const intervalId = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000); // The function inside the setInterval() will execute every 1 second (1000 milliseconds) until the count is greater than 5
```

# Objects + methods
- `Object.assign()`: Copies the values of all enumerable own properties from one or more source objects to a target object and returns the target object.
- `Object.create()`: Creates a new object with the specified prototype object and properties.
- `Object.defineProperties()`: Defines new or modifies existing properties directly on an object, returning the object.
- `Object.defineProperty()`: Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
- `Object.entries()`: Returns an array containing all enumerable property [key, value] pairs of an object.
- `Object.freeze()`: Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
- `Object.fromEntries()`: Returns a new object from an array of [key, value] pairs.
- `Object.is()`: Determines whether two values are the same value.
- `Object.isSealed()`: Determines if an object is sealed.
- `Object.keys()`: Returns an array containing the names of all enumerable properties of an object.
- `Object.preventExtensions()`: Prevents new properties from being added to an object.
- `Object.seal()`: Prevents new properties from being added to an object and marks all existing properties as non-configurable.
- `Object.setPrototypeOf()`: Sets the prototype (i.e. the internal [[Prototype]] property) of a specified object to another object or null.
- `Object.values()`: Returns an array containing the values of all enumerable own properties of an object.
- `Object.entries()`: Returns an array containing all enumerable own property [key, value] pairs of an object.

