// import { Profile } from '../actionTypes'

import { getValueFromStorage } from 'utils/helpers'

import { StorageKey } from 'utils/constants'

const initialState = {
  isAuthenticated: !!getValueFromStorage(StorageKey.authAccessToken),
  loading        : false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state
  }
}

export default auth
