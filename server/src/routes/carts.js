const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const CartItem = require('../models/cart')
const Food = require('../models/food')

// get

router.get('/:userId',  async (req, res) => {

  try {
    const cartItem = await CartItem.find({user: req.params.userId}).populate('food')
    if (cartItem === null) {
      return res.status(404).json({ message: 'cannot find item' })
    }
    res.status(200).json(cartItem)
  } catch (err) {
   return res.status(500).json({ message: err.message })
  }
})

// create 

router.post('/:userId',  async (req, res) => {

    const { foodId, ammount } = req.body

    const foundCartItem = await CartItem.findOne({food: foodId})

    if (foundCartItem) {
     CartItem.findByIdAndUpdate(foundCartItem._id, {ammount: foundCartItem.ammount + ammount }, {new: true}).then((cartItem) => {
      if (!cartItem) {
        return res.status(404).json({
            message: 'cartItem not found'
        });
    }
    }).catch((error) => {
        res.status(500).send(error);
    })
    } else {
      const newCartItem = new CartItem({
        _id: new mongoose.Types.ObjectId(),
        food: foodId,
        ammount: ammount,
        user: req.params.userId
    })

    const foundUser = await User.findById(req.params.userId)
    await foundUser.cart.push(newCartItem._id)

    try {
        await newCartItem.save()
        await foundUser.save()
        res.status(201).json({
          status: 200
        })
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    }
  }
)

// update

router.patch('/:id', getCartItem, async (req, res) => {
let incrim
if (req.body.incrim === 'add') {
  incrim = + 1
} else if (req.body.incrim === 'substract') {
  incrim = - 1 
} else {
  incrim = null
}

const updatedAmmount = res.cartItem.ammount + incrim

  CartItem.findByIdAndUpdate(req.params.id, {ammount: updatedAmmount}, {new: true})
  .then((cartItem) => {
    if (!cartItem) {
        return res.status(404).json({
            message: 'cartItem not found'
        });
    }
    res.status(200).json({
        message: 'ammount updated'
    })
}).catch((error) => {
    res.status(500).send(error);
})

})

// delete 

router.delete('/:id/:userId', getCartItem, async (req, res) => {

    const foundUser = await User.findById(req.params.userId)

    const index = foundUser.cart.findIndex(cartItem => cartItem.toString() === req.params.id);

    if (index !== -1) {
        foundUser.cart.splice(index, 1)
        
    }

    try {
        await foundUser.save()
        await res.cartItem.remove()
        res.status(200).json({ message: 'successfully deleted the cartItem' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// delete all

router.delete('/:userId', async (req, res) => {

  const foundUser = await User.findById(req.params.userId).populate('cart')

  foundUser.cart.map( async cartItem => {

    let foundFood = await Food.findById(cartItem.food)

    let newSale = cartItem.ammount * foundFood.price
    let oldSale = foundFood.sales

     Food.findByIdAndUpdate(cartItem.food._id, {sales: oldSale + newSale }, {new: true}).then((food) => {
       if (!food) {
           return res.status(404).json({
               message: 'food not found'
           });
       }
   }).catch((error) => {
       res.status(500).send(error);
   })
  })

     foundUser.cart.splice(0, foundUser.cart.length)

     await CartItem.deleteMany({
       user: req.params.userId
     })

   try {
       await foundUser.save()
     res.status(200).json({ message: 'successfully cleared the cart' })
   } catch (err) { 
       res.status(500).json({ message: err.message })
   }
})

// get one middleware

async function getCartItem(req, res, next) {
    let cartItem
    try {
        cartItem = await CartItem.findById(req.params.id).populate('food')
        if (cartItem === null) {
          return res.status(404).json({ message: 'cannot find cartItem' })
        }
    } catch (err) {
       return res.status(500).json({ message: err.message })
    }

    res.cartItem = cartItem
    next()
}

module.exports = router