import { Auth } from '../actionTypes'

const failRequestAuth = () => ({
  type: Auth.FAIL_REQUEST_AUTH
})

const requestLogin = () => ({
  type: Auth.REQUEST_LOGIN
})

const login = () => ({
  type: Auth.LOGIN
})

const requestLogout = () => ({
  type: Auth.REQUEST_LOGOUT
})

const logout = () => ({
  type: Auth.LOGOUT
})

export default {
  failRequestAuth,

  requestLogin,
  login,
  requestLogout,
  logout
}