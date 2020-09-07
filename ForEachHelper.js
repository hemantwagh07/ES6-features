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
