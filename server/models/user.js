const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    description: {
        type: String
    }
})
const User = mongoose.model('myweb', userSchema)
module.exports = User;