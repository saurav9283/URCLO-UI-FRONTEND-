import React from 'react'
import Navbar from '../components/Navbar'
import HeaderBanner from '../components/Home/HeaderBanner/HeaderBanner'
import ServiceDetails from '../components/Home/ServiceDetails'
import ExperienceCrousal from '../components/Home/Experience/ExperienceCrousal'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeaderBanner/>
      <ServiceDetails/>
      <ExperienceCrousal/>
    </div>
  )
}

export default Home
