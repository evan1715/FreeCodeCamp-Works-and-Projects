const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. */

//Implement a Root-Level Request Logger Middleware
const logger = (req, res, next) => {
    console.log(req.method, req.path +" - " +req.ip);
    next();
}

//Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', logger, (req, res) => {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html')
});

//Serve JSON on a specific Route
app.get('/json', logger, (req, res) => {
    //Use the .env File
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ "message": "HELLO JSON" });
    } else {
        res.json({ "message": "Hello json" });
    }
});

//Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({ time: req.time })
});

//Get Route Parameter Input from the Client
app.get('/:word/echo', logger, (req, res) => {
    res.json({ echo: req.params.word });
});

//Get Query Parameter Input from the Client
app.route('/name').get((req, res) => {
    let name = `${req.query.first} ${req.query.last}`;
    res.json({ name: name });
}).post((req, res) => {
    //Get Data from POST Requests
    res.json({ name: `${req.body.first} ${req.body.last}` });
});


module.exports = app;