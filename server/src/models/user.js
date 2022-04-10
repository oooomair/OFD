const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    seller: {
        type: Boolean,
        default: false
    },
    restaurants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}],
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'CartItem'}]
}) 

module.exports = new mongoose.model('User', userSchema);