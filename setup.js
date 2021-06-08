const db = require('./db')
const seed = require('./database-seed.json')
const Client = require('./db/models/Client')
const Provider = require('./db/models/Provider')

console.log('Seeding Database')

db.dropDatabase();

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
