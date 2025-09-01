import SignIn from "./components/SignIn"
import Signup from "./components/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    { path:'/', element: <SignIn /> },
    { path:'/signup', element: <Signup /> }
  ])

  return <RouterProvider router={router} />
}

export default App
