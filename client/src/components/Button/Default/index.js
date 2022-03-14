import React, { memo } from 'react'
import classNames from 'classnames'

import './style.scss'

function DefaultButton({
  type = 'button',
  className,
  onClick,
  children,
  gradient
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames([
        'default-button',
        { 'gradient-background': gradient },
        className
      ])}
    >
      {children}
    </button>
  )
}

export default memo(DefaultButton)
