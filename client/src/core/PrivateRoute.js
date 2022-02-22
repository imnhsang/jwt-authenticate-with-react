import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { useCheckAuthentication } from 'components/Hooks'

function PrivateRoute({ children }) {
  const location = useLocation()
  const isAuthenticated = useCheckAuthentication()

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return children
}

export default PrivateRoute
