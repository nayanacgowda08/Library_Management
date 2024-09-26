// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBook from '../ReadBook'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from './AddUsers'
import Contact from '../Contact'


const AdminPortal = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/books' element={<Books/>} />
      <Route path='/readbook/:id' element={<ReadBook/>} />
      <Route path='/addbooks' element={<AddBooks/>} />
      <Route path='/users' element={<Users/>}  />
      <Route path='/addusers' element={<AddUsers/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default AdminPortal
