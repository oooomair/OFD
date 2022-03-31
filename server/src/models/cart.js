const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food'},
    ammount: {
        type: Number
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}) 

module.exports = new mongoose.model('CartItem', cartItemSchema);