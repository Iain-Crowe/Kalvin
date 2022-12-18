const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    userData: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserData'
        }
    }
});

module.exports = mongoose.model('Users', userSchema);