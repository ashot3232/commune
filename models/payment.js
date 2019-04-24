const mongoose = require('mongoose');
const { Schema } = mongoose;

const PaymentSchema = new Schema({
    amount: { type: Number, required: true },
    resident: {
        type: Schema.Types.ObjectId,
        ref: 'Resident',
        required: true
    },
    date: { type: Date, required: true },
    checkNumber: { type: Number, required: true }
});

mongoose.model('Payment', PaymentSchema);
