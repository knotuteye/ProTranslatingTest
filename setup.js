require('./db')
const seed = require('./database-seed.json')
const Client = require('./db/Client')
const Provider = require('./db/Provider')

console.log('Seeding Database')

const clientDocs = seed.clients.map((c) => new Client(c))

const providerDocs = seed.providers.map((p) => new Provider(p))

Client.insertMany(clientDocs, (err) => {
  if (err) console.log(err)
})

Provider.insertMany(providerDocs, (err) => {
  if (err) console.log(err)
  else console.log('Seeded Database Successfully')
  process.exit()
})
