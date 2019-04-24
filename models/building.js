const mongoose = require('mongoose');


const buildingSchema = new mongoose.Schema({
    address: { type: String }
});

mongoose.model('Building', buildingSchema);
