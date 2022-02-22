const getValueFromStorage = (name) => localStorage.getItem(name)

const removeValueFromStorage = (name) => localStorage.removeItem(name)

const setValueToStorage = ({ name, value }) => localStorage.setItem(name, value)

export { getValueFromStorage, removeValueFromStorage, setValueToStorage }
