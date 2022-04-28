import { useSelector } from 'react-redux'

const useCheckAuthentication = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated)

  return isAuthenticated
}

export default useCheckAuthentication
