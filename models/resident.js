const mongoose = require('mongoose');
const { Schema } = mongoose;

const residentSchema = new Schema({
    name: { type: String },
    building: {
        type: Schema.Types.ObjectId,
        ref: 'Building'
    },
    apartment: { type: Number },
    numberOfPersons: { type: Number },
    overallSqm: { type: Number },
    sqmCost: { type: Number },
    membershipFee: { type: Number }
});

mongoose.model('Resident', residentSchema);
