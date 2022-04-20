//2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to
// continue prompting the user if they enter invalid input.


var input = Number((prompt("Pick an odd number between 1 and 50.")));
while (input % 2 === 0) {
    input = Number((prompt("Pick an odd number between 1 and 50.")));
}
//3. Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.
for (var i = 1; i <= 50; i++) {
    if ((i !== input) && (i % 2 !== 0)) {
        console.log("Here is an odd number: " + i);
    } else if (i === input) {
        console.log("Yikes! Skipping number: " + input);
        continue;
    } else {
        continue;
    }
}