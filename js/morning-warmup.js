/*
1. Return a string in reverse
ex. reverseString(‘hello’) === ‘olleh’
let reverseString = (str) => {
    return //Something
};
2. Return true if palindrome and false if not
    ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
let isPalindrome = (str) => {
};
 */

// function backSdraw(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
//
// reverseString("Scooby Snacks");
//
// function palindrome(str) {
//     return true;
// }
// palindrome("eye");

var yosefObj = {
    myName: "Joseph",
    wowFaction: "For the Horde!",
    favAnime: "Food Wars",
    Kids: 2,
    age: 36,
    favColor: "teal",
    favAnimal: "wolf",
    getYounger: function(){
        return yosefObj.age - 10;
    },
}
console.log(yosefObj.getYounger());

// var car = {
//     year: 2020,
//     make: "honda",
//     model: "fit",
//     has4Wheels: true,
//     leather: true,
//     wheels: 4,
//     doors: 2,
//     stereo: false,
//     radioStations: [104.5, 95.1,101.1,"wrr", 105.3,"kntu",96.1]
// }
//
// return " I drive a " + car.make + " and I like to listen to station " + car.radioStations([1]) + ".";
//
// Write a function that filters out numbers from a list.
//     Example input: [3,g,s,5,j,8,2,d,6,h,9,l,5,s,2,3]
// Expected Output: [a,s,j,d,h,l,s]

var arrayOfCharacters = [3,"g","s",5,"j",8,2,"d",6,"h",9,"l",5,"s",2,3];

function filterOutNumbers(array) {
    return array.filter(value => typeof value === 'string');
}

console.log(filterOutNumbers(arrayOfCharacters));

//Write a function that returns the reading status of each of following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(function(obj) {
    console.log("Reading Status: " + obj.readingStatus);});
//Write a JS code to return an array of only the  Even numbers from the  given array
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [12,2,4,6,8]
var inputs = [1, 2, 3, 4, 5, 6]
var result = inputs.filter(x => x % 2 == 0)
console.log(result);

// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// some possible test cases to think about:
//     should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
//if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];

// 1. Make a function named isOdd(number)

function isOdd(number) {
    if(number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// 2. Make a function named isEven(number)

// 3. Make a function named isMultipleOfFive(input)

// 4. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

//5. Make a function named isVowel(letter)

// ** the questions with an asterisk * are more challenging
//
// 6. Write a function called first(input) that returns the first character in the provided string.

function first(input) {
    var arr1 = input.split("");
    return arr1[0];
}
//Made it better, faster, stronger in honor of Daft Punk
function first(input) {
    return input.split("")[0];
}

// 7* Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input string with the second input string removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.



// 8. Make a function named isSpace(letter) that returns if a character is a space character



// 9. Write a function named squareRoot(n) that returns the square root of the input



// 10* create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
function whiteSpace(input) {
    return '    input'.search(/\S/);
}
whiteSpace("purple");

// 11. Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.



// 12. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

//13. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers



//1. Define a function named lowerCase that takes in an input and returns that input as a string in all lower case

//2. Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are
// lowercase otherwise it should return false.

//3. Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are
// uppercase otherwise it should return false.

//4. Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome,
// if the string is palindrome should return false.

//5. Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the
// input is Not A Number, then return false.

//6. Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of
// hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.

//7. Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings,
// then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

//8. Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings,
// addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both
// inputs are not strings, return false.

//9. Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings,
// subtract will return the difference when the second input is subtracted from the first input.
// If one or both inputs is not numeric or numeric strings, subtract should return false.

//10. Write a function named calculateChange that takes in two inputs, totalPaid and totalCost.
// If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost
// from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places.
// If either or both inputs are not numeric or numeric strings, calculateChange should return false.


// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.
// https://en.wikipedia.org/wiki/Prime_number


// Rewrite the following using a for-loop:
// var i = 20;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }
// 2. Write a function that takes an object (a) as argument and returns an array with all object keys
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

// (hint hint hint: learn how to use a modulus)
// 1.Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)

function div3() {
    for (var z = 1; z <= 15; z++) {
        if (z % 3 === 0) {
            return (console.log(z));
        }
    }
}
divisibleBy3();


// 2. Extra Challenging - Set likely won’t be covered but it’s a useful tool in JS
// Write a function that takes a Set and an array as arguments. If not already existing, add each element in the array to the Set. Return the modified Set
//
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
//     example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
//-------------------------

//Write a function that takes an array of numbers as argument and returns the number of negative values in the array
// example Input: [1,-2,2,-4]
// expected output: 2


// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function dateDiff( str1, str2 ) {
    var diff = Date.parse( str2 ) - Date.parse( str1 );
    return isNaN( diff ) ? NaN : {
        diff : diff,
        ms : Math.floor( diff            % 1000 ),
        s  : Math.floor( diff /     1000 %   60 ),
        m  : Math.floor( diff /    60000 %   60 ),
        h  : Math.floor( diff /  3600000 %   24 ),
        d  : Math.floor( diff / 86400000        )
    };
}
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// example input: [1,2,3,4,5,6,7,8,9,10],3
// expected output: [3,6,9]

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// example input:'abcdefg'
// expected result: 'defg'

// Write a function that takes an object (a) as argument
// Return an array with all object keys

// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// example input: 931
// expected output: [9,3,1]