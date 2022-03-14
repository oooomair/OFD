const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Restaurant')

// get all 

router.get('/', async (req, res) => {
    try {
    const restaurants = await Restaurant.find()
        res.json(restaurants)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get one 

router.get('/:id', getRestaurant, (req, res) => {
    res.json(res.restaurant)
})

// create 

router.post('/', async (req, res) => {

    const { name, logo, slogan, type, cities, priceRange } = req.body

    const newRestaurant = new Restaurant({
        name: name,
        logo: logo,
        slogan: slogan,
        type: type,
        cities: cities,
        priceRange: priceRange
    })

    try {
        await newRestaurant.save()
        res.status(201).json(newRestaurant)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

// delete 

router.delete('/:id', getRestaurant, async (req, res) => {
    try {
        await res.restaurant.remove()
        res.status(200).json({ message: 'successfully deleted the restaurant' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get one middleware

async function getRestaurant(req, res, next) {
    let restaurant
    try {
        restaurant = await Restaurant.findById(req.params.id)
        if (restaurant === null) {
          return res.status(404).json({ message: 'cannot find resturant' })
        }
    } catch (err) {
       return res.status(500).json({ message: err.message })
    }

    res.restaurant = restaurant
    next()
}


module.exports = router