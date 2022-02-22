import { getValueFromStorage } from 'utils/helpers'
import { StorageKey } from 'utils/constants'

const useAuth = () => getValueFromStorage(StorageKey.authAccessToken)

export default useAuth
