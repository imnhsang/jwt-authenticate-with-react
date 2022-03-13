import {
  failRequestOthers,
  requestOthersChangeNav,
  othersChangeNav
} from '../actions/others'

import { toastifyNotify } from 'utils/helpers'

import { ToastType } from 'utils/constants'

export const changeNavigation = (newNav) => (dispatch) => {
  try {
    dispatch(requestOthersChangeNav())

    dispatch(othersChangeNav(newNav))
  } catch (error) {
    dispatch(failRequestOthers())

    toastifyNotify(ToastType.ERROR, 'Something happened...')
  }
}
