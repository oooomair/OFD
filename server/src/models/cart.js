const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food'}]
}) 

module.exports = new mongoose.model('Cart', cartSchema);