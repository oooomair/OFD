const mongoose = require('mongoose')

const restaurantsSchema = new mongoose.Schema({
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
    }
}) 

module.exports = new mongoose.model('restaurants', restaurantsSchema);