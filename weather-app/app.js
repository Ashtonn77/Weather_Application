const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js')

const address = process.argv[2];
if(!address){
    console.log('Please enter an address')
}
else{
    geoCode(address, (error, geoCodeData) => {
        if(error){
            return console.log(error);
        }
        forecast(geoCodeData.latitude, geoCodeData.longitude, (error, forecastData) => {
            if(error){
                return error;
            }
            console.log(geoCodeData.location);
            console.log(forecastData);
        })
    })
}


