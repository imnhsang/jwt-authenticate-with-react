import React, { Suspense, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from '../routes'

function Content() {
  return (
    <Suspense fallback={<p>Loading... level 2</p>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route?.key}
            path={route?.path}
            element={route?.component}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(Content)

Content.whyDidYouRender = true
