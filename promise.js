let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
    //cleaning the room
    let isClean = false; // If true => then block executes else => catch

    isClean ? resolve('Clean') : reject('not Clean');

});

promiseToCleanTheRoom.then(function (fromResolve) {
    console.log('the room is' + fromResolve);
}).catch(function (fromReject) {
    console.log('the room is' + fromReject);
})
// ====================================================
let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned The Room');
    });
};

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' remove Garbage');
    });
};

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(message + ' won Icecream');
    });
};

cleanRoom().then(function (result) {
    return removeGarbage(result);
}).then(function (result) {
    return winIcecream(result);
}).then(function (result) {
    console.log('finished ' + result);
})
