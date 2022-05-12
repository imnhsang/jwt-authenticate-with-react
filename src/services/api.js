import axios from 'axios'

import { getValueFromStorage } from 'utils/helpers'

import { Env } from 'config'
import { StorageKey } from 'utils/constants'

/**
 * Instance information structure
 * @structure {
 * name: string,
 * secure: bool
 * baseURL: string
 * headers: object
 * }
 */

const instancesInfo = [
  {
    name   : 'api',
    secure : true,
    baseURL: `${Env.API_URL}/api`,
    headers: {},
  },
]

const createInstance = ({ baseURL, headers, secure }) => {
  const instance = axios.create({
    baseURL,
    headers: {
      ...headers,
      Accept        : 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: secure
  })

  instance.interceptors.request.use(
    async config => {
      if (secure) {
        const authToken = getValueFromStorage(StorageKey.authAccessToken)

        if (authToken) {
          config.headers.common.Authorization = `Bearer ${authToken}`
        }
      }
      return config
    },
    error => {
      Promise.reject(error)
    },
  )

  instance.interceptors.response.use(
    response => response,
    ({ message, response: { data, status } }) =>
      Promise.reject({ message, data, status }),
  )

  return instance
}

const instances = instancesInfo.reduce((obj, instanceInfo) => {
  const key = instanceInfo.name

  obj[key] = createInstance(instanceInfo)

  return obj
}, {})

export const { api } = instances
