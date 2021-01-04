// // Callback Function is a function we provide as an argument to another function with the intention of having it called later on

setTimeout(() => {
    console.log('Two seconds are up')
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => {
    return name.length <= 4
});

// function geocode(address, callback) {

// };
// If there are no return for a function, js will return undefined
const printData = (datas) => {
    console.log(datas)

}

const geocode = (address, callback) => {
    // const data = data supposely fetched through the API
   setTimeout(()=>{
    const data = {
        latitude : 0,
        longitude: 0
    }
 
    callback(data);

   }, 2000)

};

geocode('Brussels', printData);

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (numberOne, numberTwo, callback) => {
    setTimeout(() => {
        let sum = numberOne + numberTwo;
        callback (sum);
    }, 2000)
}
//Call add is a function that takes 3 arguments (number, number, callback)
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})