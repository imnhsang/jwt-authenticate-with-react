import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import AvatarExample from 'assets/images/avatar.jpeg'

import './style.scss'

function Header() {
  return (
    <div className='header'>
      <div className='header__search-bar'>
        <button className='header__search-bar__search-btn'>
          <FontAwesomeIcon
            className='header__search-bar__icon'
            icon={faMagnifyingGlass}
          />
        </button>
        <input
          className='header__search-bar__input'
          type='text'
          placeholder='SEARCH...'
        />
      </div>
      <div className='header__personal'>
        <button type='button' className='header__extras-btn'>
          <img
            className='header__avatar'
            src={AvatarExample}
            alt='avatar-header'
          />
        </button>
      </div>
    </div>
  )
}

export default memo(Header)

Header.whyDidYouRender = true
