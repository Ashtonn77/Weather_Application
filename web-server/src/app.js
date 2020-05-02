const path = require('path');
const express = require('express');

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);


//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', ( req, res ) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ashton'
    });
})

app.get('/about', ( req, res ) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ashton'
    })
})

app.get('/help', ( req, res ) => {
    res.render('help', {
        message: 'How can we help you?',
        name: 'Ashton'
    })
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