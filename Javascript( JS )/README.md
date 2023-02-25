## Table Of Content
- [Primitive](#Primitive)
- [Closures](#Closures) 
- [Execution Context](#Execution-Context)
- [Variables(var,let,const)](#Variables(var,let,const))
- [Operatures](#Operators)
- [Array & methods](#Array-&-methods)
- [Objects + methods](#Objects-+-methods)
- [Functions](#Fuctions)
- [Error Handling](#Error-Handling)
- [Strick Mode](#Strict-Mode)
- [Timeout & Interval](#Timeout-&-Interval)
- [Classes](#Classes)

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


# Variables(var,let,const)


# Operatures

# Array & methods


# Objects + methods



