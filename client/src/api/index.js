import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000' })

export async function GetAllClients() {
  return await api.get('/clients')
}
