const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', ( req, res ) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ashton Naidoo'
    });
})

app.get('/about', ( req, res ) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ashton Naidoo'
    })
})

app.get('/help', ( req, res ) => {
    res.render('help', {
        message: 'How can we help you?',
        title: 'Help',
        name: 'Ashton Naidoo'
    })
})

//weather
app.get('/weather', ( req, res ) => {
    res.send({
        forecast: 'Sunny',
        location: 'Durban'
    });
})

app.get('/help/*', ( req, res ) => {
    res.render('error', {
        title: 'Help error',
        error: 'Help article not found',
        name: 'Ashton Naidoo'
    })
})

app.get('*', ( req, res ) => {
        res.render('error', {
            title: '404 error',
            error: 'Page not found :(',
            name: 'Ashton Naidoo'
        })
})

app.listen(3000, () => {
    console.log('server is running on 3000');
})