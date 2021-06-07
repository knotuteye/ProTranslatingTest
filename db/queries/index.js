const Client = require('../models/Client')
const Provider = require('../models/Provider')

async function GetAllClients() {
  return await Client.find()
}

async function GetAllProviders() {
  return await Provider.find()
}

async function UpdateClient(client) {
  return await Client.updateOne({ _id: client._id }, client)
}

async function UpdateProvider(provider) {
  return await Provider.updateOne({ _id: provider._id }, provider)
}

async function DeleteClient(client) {
  return await Client.deleteOne({ _id: client._id })
}

async function DeleteProvider(provider) {
  return await Provider.deleteOne({ _id: provider._id })
}
