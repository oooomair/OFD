const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    cities: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true  
    },
    sales: {
        type: Number,
        default: 0
    },
    foods: [{type: mongoose.Schema.Types.ObjectId, ref: 'Food'}],
    founder: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}) 

module.exports = new mongoose.model('Restaurant', restaurantSchema);