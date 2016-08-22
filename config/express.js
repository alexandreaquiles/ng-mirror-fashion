var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('../app/routes'),
    app = express(),
    env = process.env.NODE_ENV || 'src';

app.use(express.static('./'+env));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

// habilitando HTML5MODE
app.all('/*', function(req, res) {
    res.sendFile(path.resolve(env+'/index.html'));
});

module.exports = app;