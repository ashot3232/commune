const express = require('express');
const router = express.Router();

const { getAllPaymentsExcel, getLastFifteenPayments, makePayments } = require('../controllers/payment');


router
    .route('/payments-excel')
    .get( getAllPaymentsExcel );

router
    .route('/make-payments')
    .post( makePayments );

router
    .route('/last-fifteen-payments')
    .get( getLastFifteenPayments );


module.exports = router;
