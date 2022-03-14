const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')
const { ObjectId } = require('mongodb')

// get one

router.get('/:name', getMenu, (req, res) => {
    res.json(res.menu)
})

// create menu

router.post('/', async (req, res) => {
    
    const { name } = req.body

    const newMenu = new Menu({
        name: name
    })

    try {
        await newMenu.save()
        res.status(201).json(newMenu)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

// update 

router.patch('/:name/:id', async (req, res) => {
    
    const { price } = req.body

    try {
        if (price !== null) {
            const tempId = new ObjectId(req.params.id);
            const objFind = {name: req.params.name , 'foods._id': tempId}
            const objUpdate = {
                $set:
                    {
                        'foods.$.price': price
                    }
            };
            
            
            console.log(objFind);
            console.log(objUpdate);
            Menu.findOneAndUpdate(objFind, objUpdate)
        }
        
        res.status(200).json({ message: 'updated food' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// add food 

router.post('/:name/addFood', getMenu, async (req, res) => {

    const { food } = req.body

    if (food !== null) {
        res.menu.foods.push(food)
    }

    try {
        await res.menu.save()
        res.status(200).json({ message: 'added food' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// delete food

router.delete('/:name', getMenu, async (req, res) => {
    try {
        await res.menu.remove()
        res.status(200).json({ message: 'successfully deleted the menu' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get one middleware

async function getMenu(req, res, next) {
    let menu
    try {
        menu = await Menu.findOne({ name: req.params.name })
        if (menu === null) {
          return res.status(404).json({ message: 'cannot find menu' })
        }
    } catch (err) {
       return res.status(500).json({ message: err.message })
    }

    res.menu = menu
    next()
}


module.exports = router