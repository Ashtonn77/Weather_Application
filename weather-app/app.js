const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=1faba77a2a4bf8abdfeca8e98c4e2483&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current)
})