import React, { lazy, Suspense } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import store from './store'

import 'global/libs/reactifyCss'

// Layout
const DefaultLayout = lazy(() => import('layout/Default'))

// Pages
const LoginPage = lazy(() => import('views/pages/Login'))

function App() {
  const location = useLocation()
  
  return (
    <Provider store={store}>
      <ToastContainer
        autoClose={5000}
        transition={Flip}
        closeButton={false}
        newestOnTop
      />

      <div className='App'>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames='fade'
            timeout={300}
          >
            <BrowserRouter>
              <Suspense fallback={<p>Loading... level 1</p>}>
                <Routes>
                  <Route path='/login' element={<LoginPage />} />
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Provider>
  )
}

export default App
