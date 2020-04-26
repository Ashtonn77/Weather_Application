const request = require('postman-request');

let place = 'Seatides';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + place +'.json?access_token=pk.eyJ1IjoiYXNodG9ubjc3IiwiYSI6ImNrOWVoNGJpZTAxdGozbnJ6YmZ4YTU3YmsifQ.URWLnzB_CFi-ArH9iLlShg&limit=1';

request({url:geoUrl, json:true}, (error, response) => {
    if(error){
        console.log('Unable to connect to the location service');
    }
    else if(response.body.features.length < 1){
        console.log('Unable to find location...check input and try again');
    }
    else{
        const data = response.body;
        const latitude = data.features[0].center[1];
        const longitude = data.features[0].center[0]
        console.log(`Latitude = ${latitude}`);
        console.log(`Longitude = ${longitude}`);
    }

})

// const url = 'http://api.weatherstack.com/current?access_key=1faba77a2a4bf8abdfeca8e98c4e2483&query=37.8267,-122.4233&units=m';

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to the weather service :(');
//     }
//     else if(response.body.error){
//         console.log('Unable to find location :(');
//     }
//     else{
//         const data = response.body.current;
//         console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. But it feels like ${data.feelslike} degrees out`);
//     }       
// })