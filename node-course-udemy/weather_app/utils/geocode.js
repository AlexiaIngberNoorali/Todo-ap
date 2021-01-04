const request = require('postman-request');



/* Function definition

+   Request to an api : const geocode will communicate with the mapbox api
+   encodeURIComponent() built in function that deals with special charachters in string
+   Error Handling two types : low-level error and user error
+   If no error found, Gives back data : latitude and longitude
+   Callback called in function is defined in the call of the geocode function : it is a console.log but it could be something else than a console.log that s why it is interesting to have it in the call of the function

*/

const geocode = (address, callback) => {
    //non static url
    let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZmF0Y29va2llODgiLCJhIjoiY2tqNzA1b2M1MWNieDJzazNzN2dpdWsybyJ9.EBmuG0unOwYKMi3bCh0B3A&limit=1';
    // request to mapbox : argOne = object, argTwo = function to run when the request is complete
    request({url : url, json : true}, (error, response) => {
        if(error){
            callback('Unable to connect to locations services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find Location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
            
        }
    })
};








//Objects to be exported 

module.exports = geocode;
    
  