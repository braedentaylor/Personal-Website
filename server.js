// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {

    res.render('pages/index', {
    });
});

// about page
app.get('/Resume', function(req, res) {
    res.render('pages/resume');
});

// examples page 
app.get('/projects', function(req, res) {
    // this will render our new example spage 
    res.render("pages/projects");
});

app.post('/process_form', function(req, res){
    // create a variable to hold the username parsed from the request body
    var username = req.body.username
    // create a variable to hold ....
    var password = req.body.password

    // print variable username to console
    console.log(username);

    
    res.render('pages/thanks.ejs', {body: req.body})
  
  })


app.listen(8080);
console.log('8080 is the magic port');
