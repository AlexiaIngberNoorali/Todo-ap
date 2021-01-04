const request = require('postman-request');



const forecast = (coordOne, coordTwo, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=39f8ba655f9b68f11a0c6d9bd217d867&query=' + coordOne + ',' + coordTwo + '&units=m' ;
    request({url : url, json : true}, (error, response) => {
    if(error) {
        callback('Unable to connect to Weather service', undefined)
    } else if (response.body.error) {
        callback('Unable to find Location', undefined)
    } else {
        // const realTemp = response.body.current.temperature;
        // const feelTemp = response.body.current.feelslike;
        // const descrTemp = response.body.current.weather_descriptions[0];
        callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature  + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' degrees out');
    }
  }); // end of request method

}; // end of forecast function 



module.exports = forecast;









/*

 const url = 'http://api.weatherstack.com/current?access_key=39f8ba655f9b68f11a0c6d9bd217d867&query=Brussels';

json : true is a property of postman-request package
 parse data into JSON format
    request({ url: url, json: true}, (error, response) => {
     //First error detects low level error 
    if (error){

        console.log('Unable to connect to weather service!')
     //Second error detects error linked to the server

        } else if (response.body.error) {
     console.log('Unable to find Location')
    
     //If there are no errors
            } else {
                const realTemp = response.body.current.temperature;
                const feelTemp = response.body.current.feelslike;
                const descrTemp = response.body.current.weather_descriptions[0];
                console.log(descrTemp + '. It is currently ' + realTemp + ' degrees out. ' + 'It feels like ' + feelTemp + ' degrees out');
 }
 It is currently -- dregrees out. It feels like --- degrees out

 });

*/