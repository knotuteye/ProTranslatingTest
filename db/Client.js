const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  providers: [{ id: Number }],
})

clientSchema.methods.getProviderObjects = async function () {
  return await Provider.find({
    id: { $in: this.providers },
  }).exec()
}

const Client = mongoose.model('Client', clientSchema)

module.exports = Client
