const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', (req, res) => {
  res.send('Hello Router')
})

router.get('/clients', (req, res) => {
  queries
    .GetAllClients()
    .then((clients) => res.status(200).json(clients))
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.put('/clients', (req, res) => {
  queries
    .AddNewClient(req.body.client)
    .then(() => res.status(200).json({ success: 'Added Client Successfully' }))
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.post('/clients', (req, res) => {
  queries
    .UpdateClient(req.body.client)
    .then(() =>
      res.status(200).json({ success: 'Updated Client Successfully' })
    )
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.delete('/clients', (req, res) => {
  queries
    .DeleteClient(req.body.client)
    .then(() =>
      res.status(200).json({ success: 'Deleted Client Successfully' })
    )
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.get('/providers', (req, res) => {
  queries.GetAllProviders().then((providers) => res.status(200).json(providers))
})

router.put('/providers', (req, res) => {
  queries
    .AddNewProvider(req.body.provider)
    .then(() =>
      res.status(200).json({ success: 'Added Provider Successfully' })
    )
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.post('/providers', (req, res) => {
  queries
    .UpdateProvider(req.body.provider)
    .then(() =>
      res.status(200).json({ success: 'Updated Provider Successfully' })
    )
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

router.delete('/providers', (req, res) => {
  queries
    .DeleteProvider(req.body.provider)
    .then(() =>
      res.status(200).json({ success: 'Deleted Provider Successfully' })
    )
    .catch((err) => res.status(500).json({ error: 'Internal Server Error' }))
})

module.exports = router
