import React, { memo } from 'react'
import classNames from 'classnames'

import './style.scss'

function DefaultButton({
  type = 'button',
  className,
  onClick,
  children,
  gradient,
  danger
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames([
        'default-button',
        {'danger-background': danger},
        { 'gradient-background': gradient },
        className
      ])}
    >
      {children}
    </button>
  )
}

export default memo(DefaultButton)
