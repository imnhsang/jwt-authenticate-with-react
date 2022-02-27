import classNames from 'classnames'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

function DefaultInput({
  name = 'name',
  type = 'text',
  label = 'label',
  errorStatus = false,
  errorMsg = 'Something happened...',
  value = '',
  className = '',
  onChange,
  onKeyDown
}) {
  const isPasswordInput = name?.toLowerCase()?.includes('password')

  const [secure, setSecure] = useState(isPasswordInput ? true : false)

  const handleTypeInput = () => (isPasswordInput && !secure ? 'text' : type)

  const handleToggleSecure = () => setSecure(!secure)

  return (
    <div className={classNames(['default-input', className])}>
      <p className='default-input__label'>{label}</p>
      <input
        type={handleTypeInput()}
        className={classNames([
          'default-input__box',
          {
            'default-input__box--password': isPasswordInput
          }
        ])}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete='off'
      />
      {isPasswordInput && (
        <button
          type='button'
          className='default-input__secure'
          onClick={handleToggleSecure}
        >
          <FontAwesomeIcon
            icon={!secure ? faEye : faEyeSlash}
            className='default-input__secure__icon'
          />
        </button>
      )}
      <p
        className={classNames([
          'default-input__error',
          { active: errorStatus }
        ])}
      >
        {errorStatus ? errorMsg : 'valid'}
      </p>
    </div>
  )
}

export default DefaultInput
