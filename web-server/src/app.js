const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

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