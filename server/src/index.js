require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan("combined"))

const mongoose = require('mongoose')

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error  => console.error(error))
db.once('open', () => console.log('connected to Database'))

const restaurantsRouter = require('./routes/restaurants')
app.use('/restaurants', restaurantsRouter)

const menusRouter = require('./routes/menus')
app.use('/menus', menusRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});