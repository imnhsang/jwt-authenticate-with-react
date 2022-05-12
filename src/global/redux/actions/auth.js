import { Auth } from '../actionTypes'

const failRequestAuth = () => ({
  type: Auth.FAIL_REQUEST_AUTH
})

const requestLogIn = () => ({
  type: Auth.REQUEST_LOGIN
})

const logIn = () => ({
  type: Auth.LOGIN
})

const requestLogOut = () => ({
  type: Auth.REQUEST_LOGOUT
})

const logOut = () => ({
  type: Auth.LOGOUT
})

export default {
  failRequestAuth,

  requestLogIn,
  logIn,
  requestLogOut,
  logOut
}