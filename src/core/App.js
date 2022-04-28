import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import store from './store'

import 'global/libs/reactifyCss'

// Layout
const DefaultLayout = lazy(() => import('layout/Default'))

// Pages
const LoginPage = lazy(() => import('views/pages/Login'))
const SignUpPage = lazy(() => import('views/pages/SignUp'))

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
          <Suspense fallback={<p>Loading... level 1</p>}>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route
                path='/*'
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
