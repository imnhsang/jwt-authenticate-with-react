import {
  authLogin,
  requestAuthLogin,
  authLogout,
  requestAuthLogout,
  failRequestAuth
} from '../actions/auth'

import { AuthService } from '../services'

import {
  toastifyNotify,
  setValueToStorage,
  removeValueFromStorage
} from 'utils/helpers'

import { StorageKey, ToastType } from 'utils/constants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(requestAuthLogin())

    const body = {
      email,
      password
    }
    const response = await AuthService.login(body)

    if (response) {
      setValueToStorage(StorageKey.authAccessToken, 'token')

      dispatch(authLogin())

      return { status: true }
    } else {
      dispatch(failRequestAuth())

      toastifyNotify(ToastType.ERROR, 'Something happened...')

      return { status: false }
    }
  } catch (error) {
    dispatch(failRequestAuth())

    toastifyNotify(ToastType.ERROR, 'Something happened...')

    return { status: false }
  }
}

export const logout = () => (dispatch) => {
  try {
    dispatch(requestAuthLogout())

    removeValueFromStorage(StorageKey.authAccessToken)

    dispatch(authLogout())

    return { status: true }
  } catch (error) {
    dispatch(failRequestAuth())

    toastifyNotify(ToastType.ERROR, 'Something happened...')

    return { status: false }
  }
}
