import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import DefaultInput from 'components/Input/Default'
import DefaultButton from 'components/Button/Default'

import { useMergeState, useCheckAuthentication } from 'components/Hooks'

import { signUp } from 'global/redux/thunks/auth'

import { splitCamelCaseToString, toastSuccess } from 'utils/helpers'

import './style.scss'

function SignUpPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useCheckAuthentication()

  const [signUpInfos, setSignUpInfos] = useMergeState({
    fullName       : '',
    email          : '',
    password       : '',
    confirmPassword: ''
  })
  const [errorStatuses, setErrorStatuses] = useMergeState({
    fullName       : false,
    email          : false,
    password       : false,
    confirmPassword: false
  })
  const [errorMsgs, setErrorMsgs] = useMergeState({
    fullName       : '',
    email          : '',
    password       : '',
    confirmPassword: ''
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

  const handleChangeSignUpInfos = (e) => {
    const { name, value } = e.target
    if (errorStatuses[name]) {
      setErrorStatuses({ [name]: false })
      setErrorMsgs({ [name]: '' })
    }

    setSignUpInfos({ [name]: value })
  }

  const handleKeyDownSignUpInfos = (e) => e.key === 'Enter' && handleSignUp()

  const handleValidateSignUpInfos = () => {
    let hasError = false

    Object.keys(signUpInfos).forEach((key) => {
      if (signUpInfos[key]?.length === 0) {
        setErrorStatuses({ [key]: true })
        setErrorMsgs({ [key]: `Please enter ${splitCamelCaseToString(key)}` })

        hasError = true
      } else {
        setErrorStatuses({ [key]: false })
        setErrorMsgs({ [key]: '' })
      }
    })

    if (!hasError) {
      const isConfirmPasswordMatched = signUpInfos?.confirmPassword === signUpInfos?.password

      setErrorMsgs({ confirmPassword: !isConfirmPasswordMatched ? 'The confirm password must match password.' : '' })
      setErrorStatuses({ confirmPassword: !isConfirmPasswordMatched })

      hasError = !isConfirmPasswordMatched
    }

    return hasError
  }

  const handleSignUp = async () => {
    const hasError = handleValidateSignUpInfos()
    if (hasError) {
      return
    }

    const { status } = await dispatch(signUp(signUpInfos))

    if (status) {
      toastSuccess('Sign up successfully.')

      return navigate('/login', { replace: true })
    }
  }

  return (
    <div className='signup-page'>
      <div className='signup-page__square-left' />
      <div className='signup-page__main'>
        <h1 className='signup-page__title'>Sign Up</h1>
        <div className='signup-page__form'>
          <div className='signup-page__form__email'>
            <DefaultInput
              name='fullName'
              label='Full Name'
              value={signUpInfos?.fullName}
              onChange={handleChangeSignUpInfos}
              onKeyDown={handleKeyDownSignUpInfos}
              errorStatus={errorStatuses?.fullName}
              errorMsg={errorMsgs?.fullName}
            />
          </div>
          <div className='signup-page__form__email'>
            <DefaultInput
              name='email'
              type='email'
              label='Email ID'
              value={signUpInfos?.email}
              onChange={handleChangeSignUpInfos}
              onKeyDown={handleKeyDownSignUpInfos}
              errorStatus={errorStatuses?.email}
              errorMsg={errorMsgs?.email}
            />
          </div>
          <div className='signup-page__form__password'>
            <DefaultInput
              name='password'
              type='password'
              label='Password'
              value={signUpInfos?.password}
              onChange={handleChangeSignUpInfos}
              onKeyDown={handleKeyDownSignUpInfos}
              errorStatus={errorStatuses?.password}
              errorMsg={errorMsgs?.password}
            />
          </div>
          <div className='signup-page__form__confirm-password'>
            <DefaultInput
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              value={signUpInfos?.confirmPassword}
              onChange={handleChangeSignUpInfos}
              onKeyDown={handleKeyDownSignUpInfos}
              errorStatus={errorStatuses?.confirmPassword}
              errorMsg={errorMsgs?.confirmPassword}
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
        <p className='signup-page__new-account'>
          I had the account?{' '}
          <Link className='signup-page__new-account__link' to={'/login'}>
            Sign in now
          </Link>
        </p>
      </div>
      <div className='signup-page__square-right' />
    </div>
  )
}

export default SignUpPage
