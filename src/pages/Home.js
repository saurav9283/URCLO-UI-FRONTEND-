import React from 'react'
import Navbar from '../components/Navbar'
import HeaderBanner from '../components/Home/HeaderBanner/HeaderBanner'
import ServiceDetails from '../components/Home/ServiceDetails'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeaderBanner/>
      <ServiceDetails/>
    </div>
  )
}

export default Home
