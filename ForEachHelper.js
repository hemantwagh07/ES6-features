var colors = ['red', 'green', 'blue'];

//ES5 style to iterate
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
/* Output:
red
green
blue

*/

//ES6 style to iterate through each element

colors.forEach(color => {
    console.log(color);
});
/* Output:
red
green
blue

*/

// Using named function 

let numbers = [1, 2, 3, 4, 5];

let sum = 0;

//Function named as adder
var adder = (number) => {
    sum += number;
}

//Pass adder function to foreach
numbers.forEach(adder);

// Print sum variable
console.log(sum);
// Output
// 15
