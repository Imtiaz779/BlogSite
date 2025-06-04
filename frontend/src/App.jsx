import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'




const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/blogs",
    element:<><Navbar/><Blogs/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/signup",
    element:<><Navbar/><Signup/></>
  },
  {
    path:"/dashboard",
    element:<><Navbar/><Dashboard/></>,
    children:[{
      path:"profile",
      element:<Profile/>
    }]
  },
])

const App = () => {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App