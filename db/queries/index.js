const Client = require('../models/Client')
const Provider = require('../models/Provider')

async function GetAllClients() {
  const clientData = await Client.find()
  let result = clientData.map((client) => {
    return {
      _id: client._id,
      name: client.name,
      email: client.email,
      phone: client.phone,
      providers: client.providers.map((p) => {
        return { id: p.id }
      }),
    }
  })
  return result
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

module.exports = {
  GetAllClients,
  GetAllProviders,
  UpdateClient,
  UpdateProvider,
  DeleteClient,
  DeleteProvider,
}
