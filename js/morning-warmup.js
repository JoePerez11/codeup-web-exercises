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