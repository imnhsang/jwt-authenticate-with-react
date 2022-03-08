import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import DefaultInput from 'components/Input/Default'
import DefaultButton from 'components/Button/Default'

import { useMergeState, useCheckAuthentication } from 'components/Hooks'

import { login } from 'global/redux/thunks/auth'

import './style.scss'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useCheckAuthentication()

  const [loginInfo, setLoginInfo] = useMergeState({
    email   : '',
    password: ''
  })
  const [errors, setErrors] = useMergeState({
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
    if (errors[name]) {
      setErrors({ [name]: false })
    }

    setLoginInfo({ [name]: value })
  }

  const handleKeyDownLoginInfo = (e) => e.key === 'Enter' && handleLogin()

  const handleValidateLoginInfo = () => {
    let hasError = false

    Object.keys(loginInfo).forEach((key) => {
      if (loginInfo[key]?.length === 0) {
        setErrors({ [key]: true })
        hasError = true
      } else {
        setErrors({ [key]: false })
      }
    })

    return hasError
  }

  const handleLogin = async () => {
    const hasError = handleValidateLoginInfo()
    if (hasError) {
      return
    }

    const { email, password } = loginInfo
    const response = await dispatch(login(email, password))

    const { status } = response
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
              errorStatus={errors?.email}
              errorMsg='Please enter email'
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
              errorStatus={errors?.password}
              errorMsg='Please enter password'
            />
          </div>
          <DefaultButton
            type='button'
            className='login-page__login-btn'
            onClick={handleLogin}
          >
            <span className='login-page__login-btn__label'>Sign In</span>
          </DefaultButton>
        </div>
      </div>
      <div className='login-page__square-right' />
    </div>
  )
}

export default LoginPage
