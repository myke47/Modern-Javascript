// Types of data stored in variables = Primitive, and Reference
// Primitive data types are stored directly in the variable accesses, Stored on the stack

// Reference data types are Accessed by reference, Objects that are stored on the heap, A pointer to a location in memory

// Strings(Sequences of charachters = Letters, Numbers, Symbols, 'Whatever'), Number(Integers, Decimals, Floats are all considered numbers also.), Boolean(True or False), Null(Intentional Empty Value), Undefined(Variable that has not been assigned a value, all variable are undefined by default), Symbols (ES6)

// Reference Data Types / Objects = Arrays, Object Literals, Functions, Dates, Anything Else You Can Store...

// Dynamicaly Typed Language = 
// * Types are associated with values not variables
// * The same variable can hold multiple types
// * We do not need to specify types
// * Most other languages are statically typed (Java, C#, C++)
// * There are supersets of JS and addons to allow static typing (TypeScript(everything that JS is and more, including static typing), Flow(or Flow JS which also can give us static typing in JS))

// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null >>returns a bogus value to the 'typeof' method of being an object because in the first implementation of JavaScript, JS values were represented as a type tag and a value, with the type tags for objects being 0, and null was represented as the NULL pointer. This is basically a bug that has been in place since the beginning. 
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - OBJECTS
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof today);