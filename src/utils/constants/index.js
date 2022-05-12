export const StorageKey = {
  authAccessToken : '@auth:accessToken',
  authRefreshToken: '@auth:refreshToken'
}

export const Regex = {
  // eslint-disable-next-line no-useless-escape
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const ToastType = {
  ERROR  : 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
}