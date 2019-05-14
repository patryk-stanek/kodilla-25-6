import express from 'express';
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        title: "/index"
    });
});

app.get('/auth/google', (req, res) => {
    res.render('auth', {
        title: "/auth"
    });
});

app.get('/default', (req, res) => {
    res.render('default', {
        title: "/default",
        first_name: req.query.first_name,
        last_name: req.query.last_name
    });
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('404');
});