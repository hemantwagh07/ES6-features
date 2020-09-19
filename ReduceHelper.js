var numbers = [10, 20, 30, 40, 50];


var sum = numbers.reduce(function (sum, number) { // Function takes 2 parameters previousVal and array element
    return sum + number; // Taking previous value and adding current element into it
}, 0); // This second parameter is the initial value.


console.log(sum); // OUTPUT: 150


let balancedParens = (str) => {
    return !str.split("").reduce((previous, char) => {
        if (previous < 0) return previous;
        if (char === '(') return ++previous;
        if (char === ')') return --previous;
    }, 0);
}

console.log(balancedParens('()()()')); // OUTPUT: true

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function (something, desk) {
    if (desk.type === 'sitting') something['sitting']++;
    if (desk.type === 'standing') something['standing']++;
    return something;
}, { sitting: 0, standing: 0 });

console.log(deskTypes); // OUTPUT: { sitting: 3, standing: 2 }


// ex : You want to create a new array that contains just the names of wizards who are in Hufflepuff.
var wizards = [
    {
      name: 'Harry Potter',
      house: 'Gryfindor'
    },
    {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
    },
    {
      name: 'Tonks',
      house: 'Hufflepuff'
    },
    {
      name: 'Ronald Weasley',
      house: 'Gryfindor'
    },
    {
      name: 'Hermione Granger',
      house: 'Gryfindor'
    }
  ];

  // Get the names of the wizards in Hufflepuff
var hufflepuff = wizards.reduce(function (newArr, wizard) {
    if (wizard.house === 'Hufflepuff') {
      newArr.push(wizard.name);
    }
    return newArr;
  }, []);

  console.log(hufflepuff); // OUTPUT : [ 'Cedric Diggory', 'Tonks' ]