const express = require('express');
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use('/', function(req, res, next) {
    console.log('Time:', Date.now())
    console.log('Request URL:', req.originalUrl)
    next()
}, function(req, res, next) {
    console.log('Request type:', req.method)
    next();
})