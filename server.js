var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(function(req, res, next) {
    console.log('app.use /');
    next();
});

app.get('/', function(req, res) {
    res.send('/main');
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('404');
});