require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan("combined"))

const mongoose = require('mongoose')

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error  => console.error(error))
db.once('open', () => console.log('connected to Database'))


const restaurantsRouter = require('./routes/restaurants')
app.use('/restaurants', restaurantsRouter)

const foodRouter = require('./routes/foods')
app.use('/foods', foodRouter)

const userAuthRouter = require('./routes/userAuth')
app.use('/userAuth', userAuthRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});