// Type Conversion = taking a variable and changing the data type, so for instance when you take data into a form it would come in as a string but them you will want to do something with that data like apply calculations and you will want to change the data type to number.

let val;

// Number to string
val = String(5222);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //NaN
val = Number([1,2,3]);

// parseInt()
val = parseInt('100.30');

// parseFloat()
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

//Type coersion in the following example because JS takes it upon itself to convert val2 to a string as well, and then concats the two for the sum expression. 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum); 

// Numbers and Math Object