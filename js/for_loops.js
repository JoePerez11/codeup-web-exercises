function triangleArea(a, b, c) {
    var sp = (a + b + c) / 2;
    var area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    console.log(area);
}

triangleArea(6, 9, 12);

// program to generate a multiplication table
//set a range from 1-10
//create user input to ask for a number to be multiplied
//console log the response to verify it works

// Create a function where you prompt for a number 1-3 and have the number picked return a color.
// 1 = blue, 2 = yellow, 3 = red.
//create a function. asking for a prompt for a number.



var number = parseInt(prompt('Enter an integer: '));

function showMultiplicationTable(num){
    for(var i = 1; i <= 10; i++) {
        var solution = i * num;
        console.log(num + "x" + "=" + solution);
}
};
showMultiplicationTable(7);
// Excercise #3 as if/else


for(var i = 0; i < 10; i++){
    var rando = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if(rando % 2 === 0){
        console.log(rando + " is even");
    } else{
        console.log(rando + " is odd");
    }
};

//Excercise #3 as ternery.

for(var i = 0; i <10; i++){
    var rando = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    var result = rando % 2 == 0 ? "even" : "odd";
    console.log(rando + " is " + result);
};

// for loop start: with 1 end with 9: itereation 1 + 1 /i++
//i stands for the iteration we are on
// i + i however many times i is
// nested loop method
// for (var i = 1; i<=9; i++){
//     var output = '';
//     for(var j = 1; j<=i; j++){
//
//     }
//     console.log(output);
// }

function generatePyramid() {
    var totalNumberOfRows = 10;
    var output = '';
    for (var i = 1; i < totalNumberOfRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
        output = '';
    }
}
generatePyramid();

//
for (var i = 100; i >= 5 ; i-=5){
    console.log(i);
}

//

