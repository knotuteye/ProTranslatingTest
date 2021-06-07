const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
  id: Number,
  name: String,
})

const Provider = mongoose.model('Provider', providerSchema)

module.exports = Provider
