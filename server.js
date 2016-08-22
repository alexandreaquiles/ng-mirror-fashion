var path = require('path');
var http = require('http');

var express = require('express');
var bodyParser = require('body-parser');

var api = require('./api');

var PORT = 3000;
var env = process.env.NODE_ENV || 'src';

var app = express();
app.use(express.static('./'+env));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

api(app);

app.all('/*', function(req, res) {
    res.sendFile(path.resolve(env+'/index.html'));
});

http.createServer(app)
.listen(PORT, function () {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
