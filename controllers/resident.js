const mongoose = require('mongoose');
const generateAndSendTCountExcel = require('../services/excel-generator/t-count');

const Resident = mongoose.model('Resident');
const InitialDebt = mongoose.model('InitialDebt');
const Debt = mongoose.model('Debt');
const Payment = mongoose.model('Payment');



const _generateTCount = async (id) => {
    
    console.log('id: ', id);
    
    const initialDebt = InitialDebt.findOne({ resident: id });
    const debt = Debt.find({ resident: id });
    const payment = Payment.find({ resident: id });

    const query = Promise.all([initialDebt, debt, payment ]);

    const [ initialDebts, debts, payments] = await query;

    let paymentsAmount = 0;
    let debtsAmount = 0;

    const allPayments = payments.map(payment => {
        paymentsAmount += payment.amount;
        return {
            _id: payment._id,
            type: 'payment',
            date: payment.date,
            checkNumber: payment.checkNumber,
            amount: payment.amount,
        };
    });

    const allDebts = debts.map(debt => {
        debtsAmount += debt.amount;
        return {
            _id: debt._id,
            type: 'debt',
            date: debt.date,
            amount: debt.amount,
        };
    });

    const tCount = allDebts.concat(allPayments);
    const sortedTCount = tCount.sort((a, b) => a.date < b.date ? -1 : 1);

    return {
        initialDebt: initialDebts,
        finalDebt: initialDebts.amount + debtsAmount - paymentsAmount,
        tCount: sortedTCount
    };

};

const getResidentsByBuilding = async (req, res) => {
    const { buildingId } = req.query;

    try {
        const residents = await Resident.find({ building: buildingId }).populate('building');
        res.status(200).send({ result: residents });
    } catch(error) {
        res.status(500).send(error);
    }
};

const getTCountExcel = async (req, res) => {
    const { id } = req.params;
    try {
        const tCount = await _generateTCount(id);
        generateAndSendTCountExcel(tCount, res);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getResident = async (req, res) => {
    const { id } = req.params;
    try {

        const resident = await Resident.findById(id).populate('building');
        const tCount = await _generateTCount(id);

        const response = {
            ...tCount,
            resident
        };

        res.status(200).send({ result: response });
    } catch(error) {
        res.status(500).send(error);
    }
};


module.exports = { getResidentsByBuilding, getResident, getTCountExcel };
