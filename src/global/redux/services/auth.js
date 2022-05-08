import { api } from 'services/api'

const login = async ({ email, password }) => {
  const { data } = await api.post('api/logIn', { email, password })
  
  return data
}

export default { login }
