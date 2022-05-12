import React from 'react'

import { Link } from 'react-router-dom'
import { faWifi, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

function InternetToast({ status = false, onClose }) {
  return (
    <div
      className={`internet-toast ${status ? 'connect' : 'disconnect'}`}
    >
      <FontAwesomeIcon className='internet-toast__icon' icon={faWifi} />
      <p className='internet-toast__text'>
        {status
          ? 'Your internet connection was restored'
          : 'You are currently offline'}
      </p>
      {!status && (
        <Link className='internet-toast__refresh' href='/'>
          Refresh
        </Link>
      )}
      <button className='internet-toast__close-btn' onClick={onClose}>
        <FontAwesomeIcon
          className='internet-toast__close-btn__icon'
          icon={faTimes}
        />
      </button>
    </div>
  )
}

export default InternetToast