// create a function which builds a digital pyramid
// 1
// 22
// 333
// 4444
// to user defined height using a prompt
// and displays using console.log
//
// Pseudocode:
// create a function with no parameters
// assign an empty string to a variable which will eventually contain a string of 1s
// instantiate a variable to hold the user defined value 1-9 which will determine the size of the pyramid
// create a do while that prompts the user for a value and assigns it to the variable intantiated in the previous step
// modify the while condition at the end so that the prompt runs continually until the user enters a number 1-9
// create a for loop whitin the do-while to build a base of 1s by concatenating 1 to the empty string variable.
// each time you concatenate, multiply the string by the iteration number 'i' 3 * 111 after CONVERTING the string to a number 11111 using Number()
// print out each result as it is created in each iteration
// return;


function pyramidScheme() {
    var blank= '';

}

// Create a function where you prompt for a number 1-3 and have the number picked return a color.
// 1 = blue, 2 = yellow, 3 = red.
//create a function. asking for a prompt for a number.
// make the function return the corresponding color for the number chosen with an alert.
// if the number chose is not 1-3 return with an alert that "that color is lameo".

function colorMeBad() {

    var input = Number(prompt("Pick a number for a color"));

    if (input === 1){
        alert("blue");
    } else if(input === 2){
        alert("yellow");
    } else if(input === 3){
        alert("red");
    } else{
        alert("That color is lameo.")
    }
}

colorMeBad();
