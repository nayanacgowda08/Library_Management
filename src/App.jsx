// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<AdminPortal/>} path='/adminportal/*' />
        <Route element={<LandingPage/>}   path="/" />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



