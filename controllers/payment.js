const mongoose = require('mongoose');
const Payment = mongoose.model('Payment');
const { generateAndSendPaymentsExcel, generateAndSendPrintPaymentsExcel } = require('../services/excel-generator/payments');


const getAllPaymentsExcel = async (req, res) => {
    try {
        const payments = await Payment.find({});
        if(payments && payments.length > 0) {
            generateAndSendPaymentsExcel(payments, res);
        } else{
            res.status(200).send({ message: 'There is no payments yet' });
        }

    } catch(error) {
        res.status(500).send(error);
    }
};

const getLastFifteenPayments = async (req, res) => {
    try {
        const payments = await Payment.find({}).limit(50);
        if(payments) {
            res.status(200).send({ payments });
        } else{
            res.status(200).send({ message: 'There is no payments yet' });
        }

    } catch(error) {
        res.status(500).send(error);
    }
};

const makePayments = async (req, res) => {
    try {
        const { payments } = req.body;
        await Payment.insertMany(payments);
        generateAndSendPrintPaymentsExcel(payments, res);
    } catch(error) {
        res.status(500).send(error);
    }
};


module.exports = { getAllPaymentsExcel, getLastFifteenPayments, makePayments };
