import { api } from 'services/api'

const signUp = async ({ fullName, email, password }) => {
  const { data } = await api.post('signUp', { fullName, email, password })

  return data
}

const logIn = async ({ email, password }) => {
  const { data } = await api.post('logIn', { email, password })

  return data
}

const logOut = async () => {
  const { data } = await api.post('logOut')

  return data
}

export default { signUp, logIn, logOut }
