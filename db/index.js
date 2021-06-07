require('dotenv').config()
const mongoose = require('mongoose')
const Client = require('./Client')
const Provider = require('./Provider')
const connectionString = process.env['DB_STRING']

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (err) => console.error(err.message))
db.once('open', () => console.log('Connected to database successfully'))

module.exports = db
