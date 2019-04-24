const mongoose = require('mongoose');
const Building = mongoose.model('Building');


const getBuildings = async (req, res) => {
    try {
        const buildings = await Building.find({});
        res.status(200).send({ result: buildings });
    } catch(error) {
        res.status(500).send(error);
    }
};


module.exports = { getBuildings };
