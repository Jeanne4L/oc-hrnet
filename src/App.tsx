import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes'
import ScrollToAnchor from './components/ScrollToAnchor'

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.id} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App