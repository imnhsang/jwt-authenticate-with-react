import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import MainPage from 'views/pages/Main'
import LoginPage from 'views/pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/'
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
