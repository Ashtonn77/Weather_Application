const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js')

const address = process.argv[2];
if(!address){
    console.log('Please enter an address')
}
else{
    geoCode(address, (error, { latitude, longitude, location } = {}) => {
        if(error){
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return error;
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}


