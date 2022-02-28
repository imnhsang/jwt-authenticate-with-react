import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <p className='sidebar__logo__text'>Logo</p>
      </div>
      <div className='sidebar__nav-bar'>
        <div className='sidebar__nav-item'>
          <p className='sidebar__nav-item__label'>Nav Item</p>
        </div>
      </div>
      <div className='sidebar__others'>
        <div className='sidebar__others__storage'>
          <p className='sidebar__others__storage__used'>
            You using 4.5GB / 16GB
          </p>
        </div>
        <div className='sidebar__others__collapse'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
