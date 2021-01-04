 const request = require('postman-request');  // import npm package to do easy api request
 const geocode = require('./utils/geocode'); // import function from module.exports
 const forecast = require('./utils/forecast.js');



/*
    request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
 });

*/






//      Call of geocode function defined in geocode.js
//      two common arguments to callback functions : error and data. Only one of them can have a value, the other is undefined

geocode('London', (error, data) => {
    //Error handling between the two callbacks : if pb with geocode, forecast won't run
    if(error) {
        console.log(error)
    } else {
        console.log('Error', error);
        console.log('Data', data);
    /* 
    +   Callback chaining (chaining multiple callback)
    +   The input for forecast comes from the output from geocode 
    +   Using property obebject defined in data argument of the callback
    +   Why do we need to handle errors two times?
    */
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if(error){
                    console.log(error)
                } else {
                     console.log(data.location);
                     console.log(forecastData);
                       
                }
             }); 
    }

   

})







