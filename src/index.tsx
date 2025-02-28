import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import EmployeesProvider from './contexts/EmployeesContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </StrictMode>
)
