import { Others } from '../actionTypes'

const initialState = {}

const others = (state = initialState, action) => {
  switch (action.type) {
  case Others.FAIL_REQUEST_OTHERS:
    return { ...state }
  default:
    return state
  }
}

export default others
