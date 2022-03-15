import React, { memo } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

import _nav from '../_nav'

import './style.scss'

function Sidebar() {
  const { pathname: currentNav } = useLocation()

  return (
    <div className='sidebar'>
      <div className='sidebar__main'>
        <div>
          <div className='sidebar__logo'>
            <p className='sidebar__logo__text'>Logo</p>
          </div>
          <ul className='sidebar__nav-bar'>
            {_nav.map((nav) => (
              <li key={nav?.key} className='sidebar__nav-item'>
                <Link
                  to={nav?.to}
                  className={classNames([
                    'sidebar__nav-item__link',
                    { active: nav?.to === currentNav }
                  ])}
                >
                  {nav?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className='sidebar__others'>
        <div className='sidebar__others__storage'>
          <p className='sidebar__others__storage__used'>
            You are using 4.5GB / 16GB
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default memo(Sidebar)

Sidebar.whyDidYouRender = true
