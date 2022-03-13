import { Others } from '../actionTypes'

const initialState = {
  currentNav: 'my-files'
}

const others = (state = initialState, action) => {
  switch (action.type) {
  case Others.FAIL_REQUEST_OTHERS:
    return { ...state }
  case Others.REQUEST_CHANGE_NAV:
    return { ...state }
  case Others.CHANGE_NAV: {
    const { newNav = 'my-files' } = action.payload
    return { ...state, currentNav: newNav }
  }
  default:
    return state
  }
}

export default others
