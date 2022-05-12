
import React, { memo, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { useClickAway } from 'components/Hooks'

import { logOut } from 'global/redux/thunks/auth'

import AvatarExample from 'assets/images/avatar.jpeg'

import './style.scss'

function Header() {
  const dispatch = useDispatch()
  const extrasDropdownRef = useRef(null)
  const [showExtrasDropdown, setShowExtrasDropdown] = useState(false)

  useClickAway(extrasDropdownRef, () => handleToggleShowExtrasDropdown(), [
    'click'
  ])

  const handleToggleShowExtrasDropdown = () =>
    setShowExtrasDropdown(!showExtrasDropdown)

  const handleLogout = () => {
    const { status } = dispatch(logOut())

    if (status) {
      setShowExtrasDropdown(!showExtrasDropdown)
    }
  }

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
        <button type='button' className='header__notification-btn'>
          <FontAwesomeIcon
            className='header__notification-bell'
            icon={faBell}
          />
          <div className='header__notification-bell__dot-new' />
        </button>

        <button
          type='button'
          className='header__extras-btn'
          onClick={handleToggleShowExtrasDropdown}
        >
          <img
            className='header__avatar'
            src={AvatarExample}
            alt='avatar-header'
          />
        </button>
        {showExtrasDropdown && (
          <div className='header__extras-dropdown' ref={extrasDropdownRef}>
            <button
              className='header__extras-dropdown__item'
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(Header)

Header.whyDidYouRender = true
