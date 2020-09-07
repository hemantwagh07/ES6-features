let users = [
    { id: 1, name: 'Ramesh' },
    { id: 2, name: 'Suresh' },
    { id: 3, name: 'Ganesh' },
    { id: 4, name: 'Suresh' },
    { id: 5, name: 'Mangesh' },
];

let user;

//ES5 style to find user with name Suresh
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Suresh') {
        user = users[i];
        break;
    }
}

console.log(user); // Output : { id: 2, name: 'Suresh' }

let findUser = users.find(user => {
    return user.name === 'Suresh'
});

console.log(findUser); // Output : { id: 2, name: 'Suresh' }

//-----------------------------------------------------------------

function Car(model) {
    this.model = model
}

let cars = [
    new Car('swift'),
    new Car('Ertiga'),
    new Car('Desire')
];

let findCar = cars.find(car => {
    return car.model === 'swift';
})

console.log(findCar); // Output : Car { model: 'swift' }

//--------------------------------------------------------

/*
Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

var ladders = [ 
    { id: 1,height: 20 }, 
    { id: 3,height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

*/

let ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

let findWhere = (array, criteria) => {
    let oKey = Object.keys(criteria)[0];
    return array.find(element => {
        return element[oKey] === criteria[oKey];
    });
}

console.log(findWhere(ladders, { height: 25 })); // Output : { id: 3, height: 25 }
