'use strict';

console.log("hello world");


/* 
function sayHello(name) {
	return "Hello, "+name;
}

let msg = sayHello("Jacob");
console.log(msg); //"Hello, Jacob"

 */

/*

//assign array to variable
let myArray = ['a','b','c'];

typeof myArray //=> 'object'
let other = myArray;

//access value in other
console.log( other[1] ); //print 'b'

*/

/*

//assign function to variable
function sayHello(name) { 
  console.log("Hello, "+name);
}

typeof sayHello // 'function'
let other = sayHello;

//prints "Hello, everyone"
other('everyone'); 

*/

/*
 let myArray = [1,2,3]; //named variable (not anonymous)
console.log(myArray); //pass in named var
console.log( [4,5,6] ); //pass in anonymous value
 */

/*
 //named function
function sayHello(person){ 
    console.log("Hello, "+person); 
  } 
  */

 /*  
//anonymous function (no name!) - technically invalid
function(person) {
  console.log("Hello, "+person);
}
 */
/* 
//anonymous function (value) assigned to variable
let sayHello = function(person) {
  console.log("Hello, "+person);
}
 */
/* 
var obj = {};
var myArray = ['a','b','c'];



//assign array to object
obj.array = myArray;

//access with dot notation
obj.array[0]; //gets 'a'


//assign literal (anonymous value)
obj.otherArray = [1,2,3]
 */
/* 
var obj = {}
function sayHello(name) { 
  console.log("Hello, "+name);
}

//assign function to object
var obj.sayHi = sayHello;

//access with dot notation
obj.sayHi('all'); //prints "Hello all"


//assign literal (anonymous value)
obj.otherFunc = function() { 
  console.log("Hello world!");
} 
 */
/* 
let myArray = ['a','b','c'];


//takes array as an argument
//will access the arg array
//with an index of 1
function doOneth(array) {
  console.log( array[1] );
}


//call function and pass value
doOneth(myArray); //prints 'b'


//pass literal (anonymous value)
doOneth([1,2,3]) //prints '2'

 */
/* 
function sayHello(name) { 
  console.log("Hello, "+name);
}
//takes ANOTHER FUNCTION as an arg
//will call the arg function, 
//passing it "world"
function doWorld(aFunction) {
  aFunction("world");
}


//call function and pass value
doWorld(sayHello); //prints "Hello world"


//pass literal (anonymous value)
doWorld(function(msg) {
  console.log("you said: "+msg);
}); //prints "you said: world"

// note where parens and braces close!
*/
/* 
function sayHello() { //version with no args
	return "Hello";
}

//print out the function
console.log( sayHello ); // logs "[Function: sayHello]" 
                         // the function

//resolve the expression, THEN print that out
console.log( sayHello() ); // logs "Hello", which is 
                           // what `sayHello()` resolves to.
 */

/* 
//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {
  console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(patHead, rubBelly);
 */
/* 
//Iterate through an array
var array = ['a','b','c'];
var printItem = function(item) {
  console.log(item);
}

array.forEach(printItem);
 */
/* 
//more common to use anonymous function
array.forEach(function(item) {
  console.log(item);
});
 */
/* 
function square(n) { //a function that squares a number
  return n*n;
}

let numbers = [1,2,3,4,5];  //an initial array

//transform the numbers using the square() function
let squares = []; //the transformed array
for(let i=0; i < numbers.length; i++) {
  let transformed = square(numbers[i]);
  squares.push(transformed); //add transformed to array
}
console.log(squares); // [1, 4, 9, 16, 25]

 
 */
/* 
function square(n) { //a function that squares a number
  return n*n;
}

let numbers = [1,2,3,4,5];  //an initial array

//map the numbers using the `square` transforming function
let squares = numbers.map(square);




console.log(squares); // [1, 4, 9, 16, 25]

  */


 


/* 
let numbers = [1,2,3,4,5];  //an initial array

//map the numbers using anonymous callback function
let squares = numbers.map(function(n) {
  return n*n;
})


console.log(squares); // [1, 4, 9, 16, 25]
 */
 
/* 
let array = [3,1,4,2,5];

let isACrowd = array.filter(function(n) { 
  return n >= 3; //keep if > 3
}); //returns [3,4,5]

 */

/* 
function link(accumulation, newItem) { //adds two numbers
  let newAccumulation = accumulation + "->" + newItem;
return newAccumulation;
}

let letters = ['a','b','c','d','e'];  //an initial array

let linked = ""; //an accumulated aggregate, start at ""
for(let i=0; i < letters.length; i++){
linked = link(linked, letters[i]);
}
console.log(linked); //"->a->b->c->d->e"

 */
/* 
function link(accumulation, newItem) { //adds two numbers
  let newAccumulation = accumulation + "->"+newItem;
return newAccumulation;
}

let letters = ['a','b','c','d','e'];  //an initial array

let linked = letters.reduce(link, ""); //pass func, starting value



console.log(linked); //"->a->b->c->d->e"


 */

/* map([🐮, 🥔, 🐔, 🌽], cook)
=> [🍔, 🍟, 🍗, 🍿]

filter([🍔, 🍟, 🍗, 🍿], isVegetarian)
=> [🍟, 🍿]

reduce([🍔, 🍟, 🍗, 🍿], eat)
=> 💩
 */