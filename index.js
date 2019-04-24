const express = require('express');
const app = express();


app.use('*', (req, res) => {
    res.send('hello');
});


const port = process.env.PORT || 3000;
app.listen(port, console.log.bind(console, 'listening...'));
