import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-primary bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default Home