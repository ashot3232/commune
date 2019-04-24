const mongoose = require('mongoose');
const { Schema } = mongoose;

const DebtSchema = new Schema({
    amount: { type: Number },
    resident: {
        type: Schema.Types.ObjectId,
        ref: 'Resident'
    },
    date: { type: Date }
});

mongoose.model('Debt', DebtSchema);
