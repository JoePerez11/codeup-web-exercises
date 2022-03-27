"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
var myName = "Joseph";

function sayHello(name){
var response = ("Hello, " + name + ".");
console.log (response);
return response;
};

sayHello(myName);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
//1. ✅ Call the function.
//2. ✅ pass my name as a string literal argument.
//3. ✅ store the function result as var helloMessage.
//4. ✅ check work with console.log

sayHello("Joseph");
var helloMessage = sayHello(myName);
console.log (helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
//1. Var named myName.
//2. pass myName into sayHello function
sayHello(myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

//create function called isTwo
//use the random var to randomly generate a true or false response in the console.

var random = Math.floor((Math.random() * 3) + 1);
function isTwo(){
    if (random == 2) {
        return true
    }
    else {
        return false
    }
};

console.log (isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// create function
//cause the function to take the percentage of the tip and the price for the meal to find the tip.

// This is commented out to allow the following exercise to run.
var bill = (20);
var tipPercent = (0.10);

function calculateTip(tip) {
   return ("Please tip: $"+ (bill * tipPercent) + ".00");
}
console.log (calculateTip ());


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// Amend previous code to allow for user input.

var bill = (prompt("How much is your bill?"));
var tipPercent = (prompt("How much would you like to tip?"));

function calculateTip(tip) {
    return ("Please tip: $"+ (bill * tipPercent));
};
console.log (calculateTip ());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// Create var's for original price, discount ammount
// Creat a function called "applyDiscount"
//make the function return the total after applying the discount

var originalPrice = 1000;
var discountAmount = .1;

function applyDiscount (savings) {
  return (originalPrice - (originalPrice * discountAmount));
};

console.log ("$" + applyDiscount());

var name = prompt ("What is your name?");

if (name=== "Laura") {
    // code here gets executed if condition evaluates to true
    alert ("hey, she's my instructor");
} else if (name=== "Kenneth"){
    // code here gets executed if condition evaluates to false
    alert ("oh, hey he's my instructor too");
} else {
    alert("um I don't know them");
};