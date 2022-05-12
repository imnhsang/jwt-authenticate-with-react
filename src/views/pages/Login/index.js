import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import DefaultInput from 'components/Input/Default'
import DefaultButton from 'components/Button/Default'

import { useMergeState, useCheckAuthentication } from 'components/Hooks'

import { logIn } from 'global/redux/thunks/auth'

import './style.scss'
import { validateEmail } from 'utils/helpers'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useCheckAuthentication()

  const [loginInfo, setLoginInfo] = useMergeState({
    email   : '',
    password: ''
  })
  const [errorStatuses, setErrorStatuses] = useMergeState({
    email   : false,
    password: false
  })
  const [errorMsgs, setErrorMsgs] = useMergeState({
    email   : false,
    password: false
  })

  // If logged in, must redirect to homepage
  useEffect(() => {
    if (isAuthenticated) {
      return handleRedirectPreviousPage()
    }
  }, [isAuthenticated])

  const handleRedirectPreviousPage = () => {
    const from = location.state?.from?.pathname || '/'

    return navigate(from, { replace: true })
  }

  const handleChangeLoginInfo = (e) => {
    const { name, value } = e.target
    if (errorStatuses[name]) {
      setErrorStatuses({ [name]: false })
    }

    setLoginInfo({ [name]: value })
  }

  const handleKeyDownLoginInfo = (e) => e.key === 'Enter' && handleLogin()

  const handleValidateLoginInfo = () => {
    let hasError = false

    Object.keys(loginInfo).forEach((key) => {
      if (loginInfo[key]?.length === 0) {
        setErrorStatuses({ [key]: true })
        setErrorMsgs({ [key]: `Please enter ${key}` })

        hasError = true
      } else {
        setErrorStatuses({ [key]: false })
        setErrorMsgs({ [key]: '' })
      }
    })

    if (!hasError) {
      const isEmailValid = validateEmail(loginInfo?.email)
      setErrorStatuses({ email: !isEmailValid })
      setErrorMsgs({ email: !isEmailValid ? 'Email is invalid.' : '' })

      hasError = !isEmailValid
    }

    return hasError
  }

  const handleLogin = async () => {
    const hasError = handleValidateLoginInfo()
    if (hasError) {
      return
    }

    const { email, password } = loginInfo
    const { status } = await dispatch(logIn(email, password))

    if (status) {
      return handleRedirectPreviousPage()
    }
  }

  return (
    <div className='login-page'>
      <div className='login-page__square-left' />
      <div className='login-page__main'>
        <h1 className='login-page__title'>Login</h1>
        <div className='login-page__form'>
          <div className='login-page__form__email'>
            <DefaultInput
              name='email'
              type='email'
              label='Email ID'
              value={loginInfo?.email}
              onChange={handleChangeLoginInfo}
              onKeyDown={handleKeyDownLoginInfo}
              errorStatus={errorStatuses?.email}
              errorMsg={errorMsgs?.email}
            />
          </div>
          <div className='login-page__form__password'>
            <DefaultInput
              name='password'
              type='password'
              label='Password'
              value={loginInfo?.password}
              onChange={handleChangeLoginInfo}
              onKeyDown={handleKeyDownLoginInfo}
              errorStatus={errorStatuses?.password}
              errorMsg={errorMsgs?.password}
            />
          </div>
          <DefaultButton
            type='button'
            gradient
            className='login-page__login-btn'
            onClick={handleLogin}
          >
            <p className='login-page__login-btn__label'>Sign In</p>
          </DefaultButton>
        </div>
        <p className='login-page__new-account'>
          Don&apos;t have an account?{' '}
          <Link className='login-page__new-account__link' to={'/signup'}>
            Create new
          </Link>
        </p>
      </div>
      <div className='login-page__square-right' />
    </div>
  )
}

export default LoginPage
