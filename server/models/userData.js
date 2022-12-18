const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    kanbanData: {
        tasks: {
            type: [{
                Id: Number,
                Title: String,
                Status: String,
                Summary: String,
                Type: String,
                Priority: String,
                Tags: String,
                RankId: Number,
                Color: String   
            }]
        }
    }
});

module.exports = mongoose.model('UserData', userDataSchema);