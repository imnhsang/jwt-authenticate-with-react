import { Others } from '../actionTypes'

export const failRequestOthers = () => ({
  type: Others.FAIL_REQUEST_OTHERS
})

export const requestOthersChangeNav = () => ({
  type: Others.REQUEST_CHANGE_NAV
})

export const othersChangeNav = ({ newNav }) => ({
  type   : Others.CHANGE_NAV,
  payload: { newNav }
})
