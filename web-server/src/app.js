const express = require('express');

const app = express();


app.get('', (req, res) => {
    res.send('Hello express');
})

//help route
app.get('/help', ( req, res ) => {
    res.send('Welcome to the help desk');
})

//about
app.get('/about', ( req, res ) => {
    res.send('So you want to know more about us');
})

//weather
app.get('/weather', ( req, res ) => {
    res.send('Let\'s get the latest weather updates');
})


app.listen(3000, () => {
    console.log('server is running on 3000');
})