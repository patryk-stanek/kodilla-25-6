import express from 'express';
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use((req, res, next) => {
    console.log('app.use');
    next();
});

app.get('/', (req, res) => {
    res.send('/main');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('404');
});