const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const User = require('../models/user')
const mongoose = require('mongoose')
const multer = require('multer')
const Food = require('../models/food')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const { uploadFile, getFileStream } = require('../s3')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('only jpegs and pngs allowed'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

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

// user restaurants

router.get('/userRestaurants/:userId', async (req, res) => {
  try {
  const restaurants = await Restaurant.find({
    founder: req.params.userId
  }).populate('foods')
      res.json(restaurants)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// get restaurant image

router.get('/images/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

// create 

router.post('/:userId', upload.single('logo'), async (req, res) => {

    const { name, slogan, type, cities, priceRange } = req.body

    if (!req.file) {
      return res.status(401).json({
        message: 'Logo not found'
      })
    } else {
      const newRestaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        logo: req.file.filename,  
        slogan: slogan,
        type: type,
        cities: cities,
        priceRange: priceRange,
        founder: req.params.userId
    })

    await uploadFile(req.file)
    await unlinkFile(req.file.path)

    const foundUser = await User.findById(req.params.userId)
    await foundUser.restaurants.push(newRestaurant._id)

    try {
        await newRestaurant.save()
        await foundUser.save()
        res.status(201).json({
          status: 200
        })
    } catch (err) {
        res.status(400).json({message: 'Check Inputs'})
    }
  }

})

// delete 

router.delete('/:id/:userId', getRestaurant, async (req, res) => {

    const foundUser = await User.findById(req.params.userId)

    const index = foundUser.restaurants.findIndex(restaurant => restaurant.toString() === req.params.id);

    if (index !== -1) {
        foundUser.restaurants.splice(index, 1)
    }

    await Food.deleteMany({
      restaurant: req.params.id
    })

    try {
        await foundUser.save()
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
        restaurant = await Restaurant.findById(req.params.id).populate('foods')
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