const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views');

app.use('/', function(req, res, next) {
    console.log('Time:', Date.now())
    console.log('Request URL:', req.originalUrl)
    next()
}, function(req, res, next) {
    console.log('Request type:', req.method)
    next();
    const people = [{ name: 'Full' }, { name: 'Stacker' }, { name: 'Son' }];
    res.render('index', { title: 'Hall of Fame', people: people });
})

// in some file that is in the root directory of our application... how about app.js?
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf' },
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};
nunjucks.configure('views', { noCache: true });
nunjucks.render('index.html', locals, function(err, output) {
    console.log(output);
});