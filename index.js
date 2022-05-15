const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

// DB Connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then( () => {
    console.log('DB Connected!');
})
.catch( (err) => {
    console.log(err);
});

app.get('/api', (req, res) => {
    var dir = path.join(__dirname, "build", "index.html");
    res.json({messege: "hello, this is api endpoint", location: dir})
});


if (process.env.NODE_ENV === 'production') {    
    // Serve any static files
    var dir = path.join(__dirname, "build");
    app.use(express.static(dir));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(dir, routesHandler));
    });
}


const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});