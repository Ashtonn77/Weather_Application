const express = require('express');

const app = express();


app.get('', (req, res) => {
    res.send('<h1>My name is Ashton. I work at Google</h1>');
})

//help route
app.get('/help', ( req, res ) => {
    res.send({
        name: 'Ashton',
        company: 'Google',
        age: '32'
    });
})

//about
app.get('/about', ( req, res ) => {
    res.send('<h1 style="color:red;">So you want to know more about us</h1>');
})

//weather
app.get('/weather', ( req, res ) => {
    res.send({
        forecast: 'Sunny',
        location: 'Durban'
    });
})


app.listen(3000, () => {
    console.log('server is running on 3000');
})