const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foods: [{
        foodName: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: String
        }}
    ]
})

module.exports = new mongoose.model('Menu', menuSchema);