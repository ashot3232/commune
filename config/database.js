const mongoose = require(`mongoose`);
const { bold: { cyan, yellow, red, magenta } } = require(`chalk`);

const { mongoURI } = require(`./keys`);

const connected = cyan;
const error = yellow;
const disconnected = red;
const termination = magenta;

require('../models/admin');
require('../models/resident');
require('../models/building');
require('../models/initialDebt');
require('../models/debt');
require('../models/payment');


module.exports = () => {

    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    mongoose.connect(mongoURI, {useNewUrlParser: true});

    mongoose.connection.on(`connected`, () => {
        console.log(connected(`Mongoose default connection is open to ${ mongoURI }`));
    });

    mongoose.connection.on(`error`, err => {
        console.log(error(`Mongoose default connection has occurred ${ err } error`));
    });

    mongoose.connection.on(`disconnected`, () => {
        console.log(disconnected(`Mongoose default connection is disconnected`));
    });

    process.on(`SIGINT`, () => {
        mongoose.connection.close(() => {
            console.log(termination(`Mongoose default connection is disconnected due to application termination`));
            process.exit(0)
        });
    });
};
