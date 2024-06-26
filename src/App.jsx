import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from './RouteLayout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/singup/SignUp';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App