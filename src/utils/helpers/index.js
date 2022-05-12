import { toast } from 'react-toastify'
import { ToastType } from 'utils/constants'

const getValueFromStorage = (name = '') => localStorage.getItem(name)

const removeValueFromStorage = (name = '') => localStorage.removeItem(name)

const setValueToStorage = (name = '', value = '') => localStorage.setItem(name, value)

const createToastify = (type = ToastType.SUCCESS, msg = '') => {
  toast[type](msg, {
    position       : 'top-right',
    autoClose      : 5000,
    hideProgressBar: false,
    closeOnClick   : true,
    pauseOnHover   : true,
    draggable      : true,
    progress       : undefined
  })
}

const toastError = (error) => {
  createToastify(ToastType.ERROR, error?.data?.message || 'Something happened...')
}

const toastSuccess = (msg) => {
  createToastify(ToastType.SUCCESS, msg || 'Successfully!!!')
}

const catchThunkError = ({
  error = {
    data: {
      message: 'Something happened...'
    }
  },
  response = {
    status: false
  },
  onAction,
}) => (dispatch) => {
  dispatch(onAction())

  toastError(error)

  return response
}

const splitCamelCaseToString = (str) =>
  str.split(/(?=[A-Z])/).map((p) => p.charAt(0).toLowerCase() + p.slice(1)).join(' ')

export {
  getValueFromStorage,
  removeValueFromStorage,
  setValueToStorage,

  createToastify,
  toastError,
  toastSuccess,

  catchThunkError,

  splitCamelCaseToString,
}
