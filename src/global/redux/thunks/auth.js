import authAction from '../actions/auth'

import { AuthService } from '../services'

import {
  toastifyNotify,
  setValueToStorage,
  removeValueFromStorage
} from 'utils/helpers'

import { StorageKey, ToastType } from 'utils/constants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(authAction.requestLogin())

    const body = {
      email,
      password
    }
    const token = await AuthService.login(body)

    if (token) {
      setValueToStorage(StorageKey.authAccessToken, token)

      dispatch(authAction.login())

      return { status: true }
    } else {
      dispatch(authAction.failRequestAuth())

      toastifyNotify(ToastType.ERROR, 'Something happened...')

      return { status: false }
    }
  } catch (error) {
    dispatch(authAction.failRequestAuth())

    toastifyNotify(ToastType.ERROR, 'Something happened...')

    return { status: false }
  }
}

export const logout = () => (dispatch) => {
  try {
    dispatch(authAction.requestLogout())

    removeValueFromStorage(StorageKey.authAccessToken)

    dispatch(authAction.logout())

    return { status: true }
  } catch (error) {
    dispatch(authAction.failRequestAuth)

    toastifyNotify(ToastType.ERROR, 'Something happened...')

    return { status: false }
  }
}
