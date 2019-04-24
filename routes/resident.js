const express = require('express');
const router = express.Router();

const { getResidentsByBuilding, getResident, getTCountExcel} = require('../controllers/resident');


router
    .route('/residents/:id') // with id
    .get( getResident );

router
    .route('/residents') // with param buildingId
    .get( getResidentsByBuilding );

router
    .route('/t-count-excel/:id')
    .get( getTCountExcel );



module.exports = router;