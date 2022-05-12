import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import { useCheckInternet, useMergeState } from 'components/Hooks'
import InternetToast from 'components/Toast/Internet'

import store from './store'

import 'global/libs/reactifyCss'

// Layout
const DefaultLayout = lazy(() => import('layout/Default'))

// Pages
const LoginPage = lazy(() => import('views/pages/Login'))
const SignUpPage = lazy(() => import('views/pages/SignUp'))

function App() {
  const [internetInfos, setInternetInfos] = useMergeState({
    status : false,
    changed: false
  })

  const handleChangeStatusInternet = () => {
    setInternetInfos({
      status : navigator.onLine,
      changed: true
    })

    setTimeout(
      () => setInternetInfos({ changed: false }),
      navigator.onLine ? 3000 : 8000
    )
  }

  const handleCloseModalInternet = () => {
    setInternetInfos({ changed: false })
  }

  useCheckInternet(handleChangeStatusInternet)
  
  return (
    <Provider store={store}>
      <ToastContainer
        autoClose={5000}
        transition={Flip}
        closeButton={false}
        newestOnTop
      />
      {internetInfos.changed && (
        <InternetToast status={internetInfos.status}
          onClose={handleCloseModalInternet} />
      )}
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
