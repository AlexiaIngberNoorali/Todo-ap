//This files contains a few useful utilities for the rest of the application
// Each file has its own scope : require / import cannot access varialbes
// In order to access the full content of a file use : module.exports and assign it to the value you want to export
console.log('utils.js')

const name = 'BabyBear';

const add = function (a, b) {
    return a + b

}

module.exports = add;