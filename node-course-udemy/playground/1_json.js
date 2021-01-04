const fs = require('fs');

// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON);
//fs.readFileSync('1-json.json') : its returned value will be the content of the file so we stock that content into a variable
// THe returned value of this variable is not a string but a buffer. A buffer is a way for node js to represent binary data
// Create a variable to retrieve data from json file to be able to read it
// const dataBuffer = fs.readFileSync('1-json.json');
// //Transform that data into string 
// const dataJSON = dataBuffer.toString();
// console.log(dataBuffer.toString());
// // Parcourir les strings pour pouvoir en ressortir la value 
// const data = JSON.parse(dataJSON);
// // Une fois l'objet parsed, get the specific value
// console.log(data.title)


/*
1. Load and parse the JSON data
2. Change the name and age property using your info
3. Stringify the changed object and overwrite the original data
4. Test your work
*/

// Retrieve the data
const dataBuffer = fs.readFileSync('1-json.json');
// Transform binary into strings
const dataJSON = dataBuffer.toString();
// Parcourir les strings 
const user = JSON.parse(dataJSON);

// Acceder au propriete et change the value using js
user.name = 'Alexia';
user.age = 30;

//Convert the js object into a json format
const userJSON = JSON.stringify(user)
//Write(overWrite) the new data into the json file
const newJSON = fs.writeFileSync('1-json.json', userJSON)
