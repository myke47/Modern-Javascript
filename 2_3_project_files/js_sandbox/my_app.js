// var, let , const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// /*Init var - initializing a variable without a value allows us to use conditional values like an IF statement*/
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// //  Can not start with a number
// // var 1name = 'John';
// var $name = 'John'; 
// /* The above dollar sign would be something maybe used in JQuery where you are selecting things from the DOM with jQuery which globally uses the $ itself, so a variable to a jQuery object would be a possible use. */

// var _name= 'John'; 
// /* The above is not reallyt recommended unless dealing with a more advanced JavaScript pattern, which might include 'private variables', this is recogized as a global for private variables even across frameworks */

// // Multi word vars
// var firstName = 'John'; //Camel case, regular variables
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case, constructor functions, and ES6 classes
// var firstname; // Not recommended

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST , cannot be reassigned, cannot be reassigned as a new 'primitive value', however it can be mutated if its an Array or Object or another 'reference type'! >>Use CONST unless you plan on the value changing, or you need to initialize it, or unless you are using it in an Iterator or a Loop...This all helps to make your code more robust, more securem and more readable. 
// const name = 'John';
// console.log(name);
// Can not reassign or 'mutate'
// name = 'Sara';
// Have to assign a value
// const greeting; // <<Missing initializer in const declaration

const person = {
  name: 'John',
  age: 30,
  color: 'blue'
}

person.name = 'Sara';
person.age = '28';
person.color = 'pink';

console.log(person);
// console.table(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);