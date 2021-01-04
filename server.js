const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server Up and running"));








// Middleware : software that acts as a bridge between an operating system or database and applications, especially on a network.
//To parse is to break up a sentence or group of words into separate components
/*
import path from 'path';
import express from 'express';
import layout from 'node_modules/express-layout';

import routes from './routes';

/* express() : Creates an Express application. 
The express() function is a top-level function exported by the express module.
The express () has four methods : express.json() ; express.static(); express.Router(); express.urlencoded()
https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327#:~:text=a.-,express.,application%20using%20the%20code%3A%20app.
*/
/*
const app = express()       

//BodyParser allow us to get the infos that the user has entered (input field) and then we can use that as part of our PostRequest to a database
import bodyParser from 'body-parser';

/*
+  The app.set() function is used to assigns the setting name to value : you give a name
    app.set(name, value)
    app.set('title', 'GeeksforGeeks')
+   path.join() The path.join() method joins the specified path segments into one path. 
    for example : https://www.geeksforgeeks.org/node-js-path-join-method/

+   Here : we are creating a folder called "views"
    'views' will be used to create a file called 'layout'
    'layout' is going to INCLUDE various parts of our app
     We are separating all the files 
*/
/*
app.set('views', path.join(__dirname, 'views'));
*/