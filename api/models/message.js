const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
    key: Number,
    id: String,
    showDetails: String,
    received: Boolean,
    name: String,
    tea: String,
    media: String,
   
});

module.exports = mongoose.model('Message', Message);