import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.id} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App