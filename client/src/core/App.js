import * as React from 'react'
import {Provider} from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import store from './store'

import 'global/libs/reactifyCss'

const { lazy, Suspense } = React

// Layout
const DefaultLayout = lazy(() => import('layout/Default'))

// Pages
const LoginPage = lazy(() => import('views/pages/Login'))

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        autoClose={5000}
        transition={Flip}
        closeButton={false}
        newestOnTop
      />
      
      <div className='App'>
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route
                path='/'
                element={
                  <PrivateRoute>
                    <DefaultLayout />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
