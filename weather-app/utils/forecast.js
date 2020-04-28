const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1faba77a2a4bf8abdfeca8e98c4e2483&query=' + latitude + ',' + longitude + '&units=m';

    request({url:url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to the weather service', undefined);
        }
        else if(response.body.error){
            callback('Unable to find location', undefined);
        }        
        else{
            const data = response.body.current;
            const completeData = `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. But it feels like ${data.feelslike} degrees out`;
            callback(undefined, completeData);
        }
    })
}

module.exports = forecast;