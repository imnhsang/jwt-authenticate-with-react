import { Auth } from '../actionTypes'

export const failRequestAuth = () => ({
  type: Auth.FAIL_REQUEST_AUTH
})

export const requestLoginAuth = () => ({
  type: Auth.REQUEST_AUTH_LOGIN
})

export const authLogin = () => ({
  type: Auth.AUTH_LOGIN
})

export const requestLogoutAuth = () => ({
  type: Auth.REQUEST_AUTH_LOGOUT
})

export const authLogout = () => ({
  type: Auth.AUTH_LOGOUT
})
