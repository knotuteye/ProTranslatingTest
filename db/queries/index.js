const Client = require('../models/Client')
const Provider = require('../models/Provider')

async function GetAllClients() {
  const clientData = await Client.find()
  const result = await Promise.all(
    clientData.map(async (client) => {
      const providersRaw = await Client.getProviderObjects(client)
      return {
        _id: client._id,
        name: client.name,
        email: client.email,
        phone: client.phone,
        providers: providersRaw.map((x) => {
          return { id: x.id, name: x.name }
        }),
      }
    })
  )

  return result
}

async function GetAllProviders() {
  const providerData = await Provider.find()
  let result = providerData.map((provider) => {
    return { _id: provider._id, id: provider.id, name: provider.name }
  })
  return result
}

async function AddNewClient(client) {
  const newClient = new Client(client)
  return await newClient.save()
}

async function AddNewProvider(provider) {
  const newProvider = new Provider(provider)
  return await newProvider.save()
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
  AddNewClient,
  AddNewProvider,
  GetAllClients,
  GetAllProviders,
  UpdateClient,
  UpdateProvider,
  DeleteClient,
  DeleteProvider,
}
