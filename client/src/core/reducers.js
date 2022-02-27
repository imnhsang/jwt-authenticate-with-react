import { combineReducers } from 'redux'

import { auth } from 'global/redux/reducers'

const appReducer = combineReducers({
  auth
})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
