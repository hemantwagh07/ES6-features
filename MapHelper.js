let numbers = [1, 2, 3, 4, 5];
let doubledNumber = [];

//Using ES5 style
for (var i = 0; i < numbers.length; i++) {
    doubledNumber.push(numbers[i] * 2);
}

console.log(doubledNumber); // Output : [ 2, 4, 6, 8, 10 ]

//----------------------------------------------------------------------------------

// Using ES6 style using Map helper
let doubled = numbers.map(number => {
    return number * 2;
});//Always should have return statement 

console.log(doubled); // Output : [ 2, 4, 6, 8, 10 ]

let cars = [
    { model: 'swift', price: 'CHEAP' },
    { model: 'ciaz', price: 'expensive' }
];

let price = cars.map(car => {
    return car.price;
})

console.log(price); // Output : [ 'CHEAP', 'expensive' ]

//----------------------------------------------------------------------------------

/* Implement a 'pluck' function.  
Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 
*/
let paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

let pluck = (array, property) => {
    return array.map(element => {
        return element[property];
    })
}

console.log(pluck(paints, 'color')); // returns ['red', 'yellow', 'blue'];

