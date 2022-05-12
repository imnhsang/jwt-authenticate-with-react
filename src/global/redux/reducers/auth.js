import { Auth } from '../actionTypes'

import { getValueFromStorage } from 'utils/helpers'

import { StorageKey } from 'utils/constants'

const initialState = {
  isAuthenticated: !!getValueFromStorage(StorageKey.authAccessToken),
  loading        : false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
  case Auth.FAIL_REQUEST_AUTH:
    return {
      ...state,
      loading: false
    }
  case Auth.REQUEST_LOGIN:
    return {
      ...state,
      loading: true
    }
  case Auth.LOGIN:
    return {
      ...state,
      loading        : false,
      isAuthenticated: true
    }
  case Auth.REQUEST_LOGOUT:
    return { ...state, loading: true }
  case Auth.LOGOUT:
    return {
      ...state,
      loading        : false,
      isAuthenticated: false,
    }
  default:
    return state
  }
}

export default auth
