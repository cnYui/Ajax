const express = require('express');
const app = express();

app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World');
});

app.post('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});