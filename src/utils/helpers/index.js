import { toast } from 'react-toastify'

const getValueFromStorage = (name) => localStorage.getItem(name)

const removeValueFromStorage = (name) => localStorage.removeItem(name)

const setValueToStorage = (name, value) => localStorage.setItem(name, value)

const toastifyNotify = (type, msg) => {
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

export {
  getValueFromStorage,
  removeValueFromStorage,
  setValueToStorage,
  toastifyNotify
}
