import React from 'react'

import { useMergeState } from 'components/Hooks'

import DefaultInput from 'components/Input/Default'
import DefaultButton from 'components/Button/Default'

import './style.scss'

function LoginPage() {
  const [loginInfo, setLoginInfo] = useMergeState({
    email   : '',
    password: ''
  })

  const handleChangeLoginInfo = (e) => {
    const { name, value } = e.target

    setLoginInfo({ [name]: value })
  }

  const handleKeyDownLoginInfo = (e) => e.key === 'Enter' && handleLogin()

  const handleLogin = () => console.log('login')

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
