const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const verifyJWT = (req, res, next) => {

    const token = req.headers["x-access-token"]

    if(!token) {
        res.json({isAuth: false})
    } else {
        jwt.verify(token, "omair123", (err, decoded) => {
            if (err) {
                res.json({isAuth: false, message: err.message})
            } else {
                req.username = decoded.username
                next()
            }
        })
    }
}

router.post('/register', async (req, res) => {

    const { username, password } = req.body

    const foundUsers = await User.find({username: username})

    if (foundUsers.length >= 1) {
        return res.status(409).json({
            status: 400,
            message: 'username exists'
        })
    } else {
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.json({
                    message: err
                })
            } else {
                const newUser = new User({
                    username: username,
                    password: hash
                })
                try {
                    await newUser.save()
                    res.status(201).json({message: 'signup successful'})
                } catch (err) {
                    res.status(400).json({message: err.message})
                }
            }
        })
    }

})



router.post('/login', (req, res) => {

    const { username, password } = req.body
    
    User.findOne({
        username: username
    })   
    .populate('restaurants')
    .exec()
    .then(user => {
        if(!user) {
            return res.status(401).json({
                message: 'Auth Failed',
                user: false
            })
        } 
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'Auth Failed',
                    user: false
                })
            } else if (result) {
                const token = jwt.sign({
                    username: username
                }, 'omair123', { expiresIn: '1h' })
    
                return res.status(200).json({
                    message: 'Auth Successful',
                    token,
                    user: true,
                    foundUser: user
                })  
            } else {
                return res.status(401).json({
                    message: 'Auth Failed',
                    user: false
                })
            }
        })
    })




})

router.get('/isUserAuth', verifyJWT, (req, res) => {
    User.findOne({username: req.username})
    .populate('restaurants')
    .exec()
    .then(user => {
    res.send({isAuth: true, user: user})
    })
})

router.patch('/:id', (req, res) => {

    User.findByIdAndUpdate(req.params.id, {seller: true}, {new: true}).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: 'user not found'
            });
        }
        res.status(200).json({
            message: 'updated'
        })
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router



