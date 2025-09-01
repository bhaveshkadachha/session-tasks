import DashboardPage from "./pages/dashboard"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    { path:'/', element: <SignIn /> },
    { path:'/signup', element: <Signup /> },
    { path:'/dashboard', element: <DashboardPage /> }
  ])

  return <RouterProvider router={router} />
}

export default App
