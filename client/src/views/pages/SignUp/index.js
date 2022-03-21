import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import DefaultInput from 'components/Input/Default'
import DefaultButton from 'components/Button/Default'

import { useMergeState, useCheckAuthentication } from 'components/Hooks'

// import { signup } from 'global/redux/thunks/auth'

import './style.scss'

function SignUpPage() {
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useCheckAuthentication()

  const [signupInfo, setSignUpInfo] = useMergeState({
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

  const handleChangeSignUpInfo = (e) => {
    const { name, value } = e.target
    if (errors[name]) {
      setErrors({ [name]: false })
    }

    setSignUpInfo({ [name]: value })
  }

  const handleKeyDownSignUpInfo = (e) => e.key === 'Enter' && handleSignUp()

  const handleValidateSignUpInfo = () => {
    let hasError = false

    Object.keys(signupInfo).forEach((key) => {
      if (signupInfo[key]?.length === 0) {
        setErrors({ [key]: true })
        hasError = true
      } else {
        setErrors({ [key]: false })
      }
    })

    return hasError
  }

  const handleSignUp = async () => {
    const hasError = handleValidateSignUpInfo()
    if (hasError) {
      return
    }

    // const { email, password } = signupInfo
    // const response = await dispatch(signup(email, password))

    // const { status } = response
    // if (status) {
    // return handleRedirectPreviousPage()
    // }
  }

  return (
    <div className='signup-page'>
      <div className='signup-page__square-left' />
      <div className='signup-page__main'>
        <h1 className='signup-page__title'>Sign Up</h1>
        <div className='signup-page__form'>
          <div className='signup-page__form__email'>
            <DefaultInput
              name='email'
              type='email'
              label='Email ID'
              value={signupInfo?.email}
              onChange={handleChangeSignUpInfo}
              onKeyDown={handleKeyDownSignUpInfo}
              errorStatus={errors?.email}
              errorMsg='Please enter email'
            />
          </div>
          <div className='signup-page__form__password'>
            <DefaultInput
              name='password'
              type='password'
              label='Password'
              value={signupInfo?.password}
              onChange={handleChangeSignUpInfo}
              onKeyDown={handleKeyDownSignUpInfo}
              errorStatus={errors?.password}
              errorMsg='Please enter password'
            />
          </div>
          <div className='signup-page__form__confirm-password'>
            <DefaultInput
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              value={signupInfo?.confirmPassword}
              onChange={handleChangeSignUpInfo}
              onKeyDown={handleKeyDownSignUpInfo}
              errorStatus={errors?.confirmPassword}
              errorMsg='Please enter confirm password'
            />
          </div>
          <DefaultButton
            type='button'
            gradient
            className='signup-page__signup-btn'
            onClick={handleSignUp}
          >
            <p className='signup-page__signup-btn__label'>Sign Up</p>
          </DefaultButton>
        </div>
      </div>
      <div className='signup-page__square-right' />
    </div>
  )
}

export default SignUpPage
