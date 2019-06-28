// String Methods & Concatenation
const firstName = 'Williamsaxe';
const lastName = 'Johnson';
const age = 36;
str = 'Hello, this, is, my, string, for, method examples'

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat method
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// You can treat strings like read only arrays, which is not always useful or practical but is possible to do. 
val = firstName[3];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');


// charAt()
val = firstName.charAt('2');

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = str.split(',');

//replace()
val = str.replace('for', 'for practicing several different');

// includes()
val = str.includes('this');
val = str.includes('4');

console.log(val);
console.table(val);