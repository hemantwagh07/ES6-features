let computers = [
    { brand: 'Apple', ram: 24 },
    { brand: 'Acer', ram: 4 },
    { brand: 'Compaq', ram: 8 },
    { brand: 'HP', ram: 16 },
];

let allComputerCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;
{
    //ES5 style to find if all computer can run the program which require minimum 16 GB ram
    for (let i = 0; i < computers.length; i++) {
        if (computers[i].ram < 16) {
            allComputerCanRunProgram = false;
        } else {
            onlySomeComputersCanRunProgram = true;
        }
    }
    console.log(allComputerCanRunProgram); // Output : false
    console.log(onlySomeComputersCanRunProgram); // Output : true
}

allComputerCanRunProgram = computers.every(computer => {
    return computer.ram > 16;
});// will return true only if all iteration returns true (AND condition)

console.log(allComputerCanRunProgram); // Output : false

onlySomeComputersCanRunProgram = computers.some(computer => {
    return computer.ram > 16;
}); // will return if any iteration returns true; (OR condition)

console.log(onlySomeComputersCanRunProgram);// Output : false