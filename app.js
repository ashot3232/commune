const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const residentRoutes = require('./routes/resident');
const buildingRoutes = require('./routes/building');
const paymentRoutes = require('./routes/payment');

const { PORT } = require('./config/keys');
const requireAuth = require('./middlewares/requireAuth');

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

require('./services/passport');

const app = express();

app.use( cors() );
app.use( bodyParserJSON );
app.use( bodyParserURLEncoded );


// -> POST |  /sign-in        |  sign in with username and password
// -> GET  |  /buildings      |  all buildings
// -> GET  |  /residents      |  residents by given building id
// -> GET  |  /payments-excel |  get all payments in excel file


app.use('/api', authRoutes);
app.use('/api', requireAuth, residentRoutes);
app.use('/api', requireAuth, buildingRoutes);
app.use('/api', requireAuth, paymentRoutes);


app.use('/api/*', (req, res) => {
    res.status(404).send({
        error: {
            code: 404,
            message: 'Not Found'
        }
    });

});



if(process.env.NODE_ENV === 'production') {

    app.use( express.static('client/build') );

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'build', 'index.html')
        );
    });
}


module.exports = () => {

    app.listen(
        PORT,
        console.log.bind(console, `Server is running on ${ PORT } port.`)
    );

};
