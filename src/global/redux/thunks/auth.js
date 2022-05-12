import AuthAction from '../actions/auth'

import { AuthService } from '../services'

import {
  catchThunkError,
  setValueToStorage,
  removeValueFromStorage,
} from 'utils/helpers'

import { StorageKey } from 'utils/constants'

export const signUp = (signUpInfos) => async (dispatch) => {
  try {
    dispatch(AuthAction.requestLogIn())

    const body = {
      ...signUpInfos
    }
    await AuthService.signUp(body)

    return { status: true }
  } catch (error) {
    return dispatch(catchThunkError({
      error,
      response: {
        status: false
      },
      onAction: AuthAction.failRequestAuth,
    }))
  }
}

export const logIn = (email, password) => async (dispatch) => {
  try {
    dispatch(AuthAction.requestLogIn())

    const body = {
      email,
      password
    }
    const token = await AuthService.logIn(body)

    setValueToStorage(StorageKey.authAccessToken, token)

    dispatch(AuthAction.logIn())

    return { status: true }
  } catch (error) {
    return dispatch(catchThunkError({
      error,
      response: {
        status: false
      },
      onAction: AuthAction.failRequestAuth,
    }))
  }
}

export const logOut = () => async (dispatch) => {
  try {
    dispatch(AuthAction.requestLogOut())

    await AuthService.logOut()

    removeValueFromStorage(StorageKey.authAccessToken)

    dispatch(AuthAction.logOut())

    return { status: true }
  } catch (error) {
    return dispatch(catchThunkError({
      error,
      response: {
        status: false
      },
      onAction: AuthAction.failRequestAuth,
    }))
  }
}
