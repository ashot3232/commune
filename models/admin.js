const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWTSecretSalt } = require('../config/keys');


const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: { type: String },
    password: { type: String }
});


AdminSchema.methods.generateAuthToken = function() {
    const admin = this;
    const token = jwt.sign({
        username: admin.username,
        sub: admin.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1) // plus one day
    }, JWTSecretSalt);
    return token;
};

AdminSchema.methods.verifyPassword = function(password) {
    const admin = this;
    return bcrypt.compareSync(password, admin.password);
};

mongoose.model('Admin', AdminSchema);
