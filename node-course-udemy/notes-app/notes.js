// Don't forget to export all your functions
// Require fs to use the module
const fs = require('fs'); 
const chalk = require('chalk');  





const readNotes = (title) => {
  const notes = loadNotes();
  //returns a NEW object(with one property : title) within the array loadNotes
  const readNote = notes.find((note) => note.title === title);
  //execute code on the new object readNote
  if (readNote){
    // print the title of that found object 
    console.log(chalk.magentaBright(readNote.title));
    // print the body of that found object
    // property will be undefined if not called on any object
    console.log(readNote.body);
  } else {
    console.log(chalk.red('Note not found'));
  }
}

const listNotes = () => {
  console.log(chalk.magentaBright('Your Notes'));
  const notes = loadNotes();
  notes.forEach((note) => {
      console.log(note.title)
  })

}

/* Create the function to add a note
   Function's body : to save a note that has just been written

+   First time you run addNotes : it gives back an empty array because the notes.json does not exist yet
+   Second time you run addNotes : you add data to that empty array with the notes.push(l 25)
                                  and you save that data by creating a file with fs.write
+   Third step : make sure there can't be no duplicate in title and in body
*/

const addNotes = (title, body)=> {
      
      /* 
      +   Here we are loading the notes to read it 
      +   loadNotes() is expected to return an empty array
      +   The empty array is stored in variable notes
      */
      const notes = loadNotes()

      /*
      +   Use method filter on empty array notes
      +   The filter() method creates a new array with all elements that pass the test implemented by the provided function.
      +   If title = title, it returns true, it means we have a duplicate and we keep it in the array
      +   If returns false, there is no duplicate and the duplicateNotes array is left empty
      +   The function is called as many times as they are objects in notes.json file.  twice : 1st on the first object title and 2scn on the second object.
      */
      // const duplicateNotes = notes.filter(function(note){
      //       return note.title === title})
     
      const duplicateNotes = notes.filter((note) => note.title === title)
      /* The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.*/
      const duplicateNote = notes.find((note) => note.title === title)
      // If length of the array duplicateNotes = 0 = true it means they are not duplicate 
      // If there is no duplicate note (duplicateNote === undefinded)
      if (!duplicateNote) {
      /* 
       +    Push in the empty array defined in notes (so in loadNotes since notes = loadNotes)
       +    Each note is defined as an object
       +    Here we are changing the content 
      */

      notes.push({
        title : title,
        body : body
      })

      // Here we are saving the notes. Call the function saveNotes defined below to save what has been pushed just above.
      saveNotes(notes);
      console.log(chalk.pink.inverse('New note added!'));
      // If there is a duplicate
      } else {
        console.log(chalk.blue.inverse('Note Title taken!'))
      }


      
      
} // end of addNote function

/* 

+   Create the remove function : that will remove duplicates only
+   Read Json file (loadNotes())
+   Look for duplicates 

*/

const removeNote = (title) => {
   //loadNotes is basically just a function to read data from our json file. It requires three steps though
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title )  
         // non duplicate is saved
        // si larray a une longueur de zero cela veut dire qu'il n y a eu que des duplicate 
        // si l'array n'a pas une longueur de zero ca veut qu'il ya des nouveaux elements
    

 //Je vérifie que la longueur l'array existant soit plus grand que la longueur de l'array qui ne contient pas de duplicate
//Si la longueur du premier est plus grande, cela signifie que des elements ont été supprimés
// Si des elements ont ete supprimes je console log le message special et je sauve les nouvelles notes
// si la longueur de larray1 n'est pas plus grande que celle de l'array 2 cela veut dire qu'il n'y a pas eu d'éléments supprimés
    if (notes.length > notesToKeep.length){
      console.log(chalk.green('Note Removed'))
      saveNotes(notesToKeep)
    } else {
      console.log(chalk.red('Note not found'))
    }


    

  

    // Save the new array filled with all the non duplicate 
    // notesToKeep ne conserve que les titres qui sont differents, si je donne un titre qui n'est pas deja present dans le json, il sera sauvegarde dans l'array. 
    // Si je donne un titre similaire, il ne sera pas sauvegardé cad il sera supprimé


    
}


/* 
+   Create a load function to load json note when user adds remove note. Goal : no overwriting
+   Returns an array of notes 

 +  3 Steps to fetch data from a JSON file 
 +  1. Retrieve data from the file using  fs.readFileSync (binary format)
 +  2. Transform the binary format into a string with toString
 +  3. Parse the json data in order to access it s property JSON.parse
 */

const loadNotes =  () => {
//writing defensive code that knows how to work even if the file doesn't exist
      try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
      } catch(e) {
       // In case file is inexistant it will return an empty array
          return [];
      }
 


      
}


/* 
+   Create a saveNotes function that takes as an arguments the array of notes defined in the notes function (empty array was defined in the loadNotes function)
+   Take object or an array and use JSN.stringify 
+   Once the data is in json format we write it in the file we want with fs.writeSync
*/

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}




// Export functions in app.js
module.exports = {
  addNotes : addNotes,
  removeNote: removeNote,
  listNotes : listNotes,
  readNotes : readNotes
}


//to export the function to the file app.js
// to export several function create an object that will store all function that need to be imported

