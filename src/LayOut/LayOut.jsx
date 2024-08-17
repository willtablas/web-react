import React from 'react'

import {  Outlet, RouterProvider ,createBrowserRouter } from 'react-router-dom'

//paginas...................
import Login from '../pages/login/Login'
import Singup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'


//componentes...........
import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/rightbar'



export default function LayOut() {

//feed..........
const Feed =() => {
  return (
    <>
    < Nav/>
       <main>
        <LeftBar/> 
      <div className="container">
        <Outlet/>
      </div>
      <RightBar />
     </main>
    </>
  )
}


  //routers..................
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Feed/>  ,
      children:[
        {
          path:'/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/chatbox/:id',
          element: <ChatBox />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Singup />
    }
  ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
