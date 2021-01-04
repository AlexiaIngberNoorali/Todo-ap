// --- Storing a string in a variable (message) ----

const message = "Message to be printed after 2 sec of waiting"


// --- Defining a CALLBACK_FUNCTION (print) and a WRAP_FUNCTION (delay) ----

function print(string) {
    console.log(string)
};

function delay(mainArg, callbackFunction) {
    setTimeout(callbackFunction(mainArg), 2000)
};

// --- Calling the wrap function with two arguments : a string, and the name of the CALLBACK_FUNCTION----

wrapFunction(message, print);



//-----------------------------------------------------------------//
//--------| Another version with small differences below |---------//
//---------------------------------||------------------------------//
//---------------------------------||------------------------------//
//--------------------------------\  /-----------------------------//
//---------------------------------\/------------------------------//



// --- Storing a string in a variable (message) ----

const message = "Message to be printed after 2 sec of waiting"

// --- Defining (E6 Syntax) a main function (print) and a wrapFunction (delay) ----

const print = (string) => {console.log(string)};

const delay = (mainArg, mainFunction, time) => {setTimeout(mainFunction(mainArg), time)};

// --- Calling the wrap function with two arguments : a string, and a function name----

wrapFunction(message, print, 2000);