const express = require('express');
const router = express.Router();

const { getBuildings } = require('../controllers/building');


router
    .route('/buildings')
    .get( getBuildings );



module.exports = router;