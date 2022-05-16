const express = require('express');
const bodyParser = require('body-parser');
//const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

const Schemas = require('./models/Schemas.js');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use('/', routesHandler);



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

app.post('/createinvite', async (req, res) => {
    
    //const userTweet = req.body.tweetInput;
    //const user = Schemas.Users;
    //const userId = await user.findOne({username:'eaglefang'}).exec();
    
    const data = req.body.datajson;
    console.log("--1--")
    console.log(data);
    console.log("--2--")
    const invite = new Schemas.Invites({
        name: "tedt23",
        date: "test1111"
    });
    try {
        await invite.save( (err, newTweetResults) => {
            
            if (err) res.end('Error Saving.');
            res.redirect('/');
            res.end();
        });
    } catch(err) {
        console.log('-------------------------kk------------');
        console.log(err);
        res.redirect('/');
        res.end();
    }
});


if (process.env.NODE_ENV === 'production') {    
    // Serve any static files
    
    var dir = path.resolve(__dirname, "client/build");
    app.use(express.static(dir));
    
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
/*
    app.get('*', (req, res) => {
        var dir2 = path.resolve(__dirname, routesHandler);
        res.send(dir2);
      });*/
}


const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});