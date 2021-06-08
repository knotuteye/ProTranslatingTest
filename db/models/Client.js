const mongoose = require('mongoose')
const Provider = require('./Provider')

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  providers: [{ id: Number }],
})

clientSchema.statics.getProviderObjects = async function (client) {
  return await Provider.find({
    id: { $in: client.providers.map((x) => x.id) },
  }).exec()
}

const Client = mongoose.model('Client', clientSchema)

module.exports = Client
