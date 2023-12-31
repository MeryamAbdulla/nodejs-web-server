var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;


// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About Page');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT + '!');
});