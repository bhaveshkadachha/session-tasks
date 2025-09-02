import ProtectedRoute from "./pages/ProtectedRoute"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardPage from "./services/Dashboard"

function App() {

  const router = createBrowserRouter([
    { path:'/', element: <SignIn /> },
    { path:'/signup', element: <Signup /> },
    { element: <ProtectedRoute />, children: [
      { path:'/dashboard', element: <DashboardPage /> }
    ] }
  ])

  return <RouterProvider router={router} />
}

export default App
