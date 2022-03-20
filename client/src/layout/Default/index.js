import React from 'react'

import Header from 'navigators/Header'
import Sidebar from 'navigators/Sidebar'
import Content from 'navigators/Content'

import './style.scss'

function DefaultLayout() {
  return (
    <div className='default-layout'>
      <div className='default-layout__left'>
        <Sidebar />
      </div>
      <div className='default-layout__right'>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default DefaultLayout
