require('dotenv').config()
const mongoose = require('mongoose')
const connectionString = process.env['DB_STRING']

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on(
  'error',
  console.error.bind(console, 'ERROR: Could not connect to database')
)

db.once('open', () => console.log('Connected to database successfuly'))
