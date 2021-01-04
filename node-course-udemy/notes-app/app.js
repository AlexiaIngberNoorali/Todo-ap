/*  main app file + THEORY
+   process : one of the few global object that can be access without requiring it. We use yargs instead now
+   argv : argumentVector : ARRAY that contains all arguments provided : 2first are provided and mandatory and the third one is the argument you want to execute ( this is just for this exercice afterwards those command line will be in the body of a function?)
+   const validator = require('validator');
+   Yargs module is used for creating your own command-line commands in node.js and helps in generating an elegant user interface. This module makes command-line arguments flexible and easy to use.
*/


const notes = require('./notes.js');
const yargs = require('yargs')
const chalk = require('chalk');

console.log('hello');


// Customize yargs version
yargs.version('1.1.0')


/*
+   Customizing Yargs so it is useful for the application we are building
+   4 distinct commands I want to set up and costumize for the user :
+   add, remove, read, list
*/

/*
+   Create add command
+   Calling the command method() on yargs
+   Pass to the command method an object{} 
+   Handler : set to the code which will run when someone uses the ad command
              This property needs to be set up with a function value and that function gets executed if the command is used
*/



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    // builder is the body of the command
    builder : { 
        title: {
            describe: 'Note title',
            // demandOption set to true will make the title property a required one and not an optionnal one. Won't work if you don't set it
            demandOption: true ,
            // require a string value for title instead of a boleean
            type: 'string'     
        },
        body: {
            describe: 'Content of note',
            demandOption: true,
            type: 'string'
        }


    },





    
    /*
    
    +   handler : function takes as argument, the arg given by the user (here in terminal : command line : ce que j'écris dans le terminal)
    +   argv : sont passés du terminal à l'application app.js
    +   argv.title : propriété title des arguments donnés par le user

    */


    handler(argv){

       //property addNotes of the exported file notes.js
       notes.addNotes(argv.title, argv.body)
    }


})









// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})









// Create the list command 
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        //always apply the function on the already loaded notes
      notes.listNotes()
    }
})









// Create the read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        // body: {
        //     describe: 'Content of note',
        //     // demandOption: true,
        //     type: 'string'
        // }
    },
   
    // argv : input du user. Here : input set in the terminal by me 
    handler(argv){
        notes.readNotes(argv.title);
    }
})









//Always leave this line at bottom of the code
// console.log(yargs.argv);

/* Returns the argument's object
+   Yargs.parse() : goes through the process of passing the arguments with all of the configuration detailes provided above with the yards commands calls up above
*/
yargs.parse();





/* PAST CHALLENGES

+   Without using yargs, raw coding to manipulate command line
const command = process.argv[2];
if(command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove'){
    console.log('removing note!')
} else {
    console.log('ouspi misfi')
};

+   Challenge to import a function and execute it's code 
const add = require('./utils.js')
const sum = add(4, 2)
console.log(sum);
*/