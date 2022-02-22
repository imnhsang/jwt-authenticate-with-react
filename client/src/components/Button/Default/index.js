import React from 'react'
import classNames from 'classnames'

import './style.scss'

function DefaultButton({ type = 'button', onClick, className, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(['default-button', className])}
    >
      <div className='default-button__label'>{children}</div>
    </button>
  )
}

export default DefaultButton
