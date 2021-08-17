const express = require('express');
const app = express();

/* In Express, routes takes the following structure: app.METHOD(PATH, HANDLER). METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression). HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. */

const logger = (req, res, next) => {
    console.log(req.method, req.path +" - " +req.ip);
    next();
}

app.get('/', logger, (req, res) => {
    // res.send('Hello Express');
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/json', logger, (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
})


module.exports = app;