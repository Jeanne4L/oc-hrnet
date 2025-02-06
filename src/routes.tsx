import EmployeesPage from "./pages/Employees";
import HomePage from "./pages/Home";

export const routes = [
  {
    path: '/',
    component: <HomePage />,
    id: 'home'
  },
  {
    path: '/employees',
    component: <EmployeesPage />,
    id: 'employees'
  }
]