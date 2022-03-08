import React, { lazy } from 'react'
import {Navigate} from 'react-router-dom'
const MyFiles = lazy(() => import('views/MyFiles'))
const ComingSoon = lazy(() => import('views/ComingSoon'))

const routes = [
  {
    key      : 'home',
    path     : '/',
    name     : 'Home',
    component: <Navigate replace to='/my-files' />
  },
  {
    key      : 'my-files',
    path     : '/my-files',
    name     : 'My Files',
    component: <MyFiles />
  },
  {
    key      : 'important',
    path     : '/important',
    name     : 'Important',
    component: <ComingSoon routeName='Important' />
  },
  {
    key      : 'archives',
    path     : '/archives',
    name     : 'Archives',
    component: <ComingSoon routeName='Archives' />
  },
  {
    key      : 'deleted',
    path     : '/deleted',
    name     : 'Deleted',
    component: <ComingSoon routeName='Deleted' />
  }
]

export default routes
