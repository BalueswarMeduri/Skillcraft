import Cabinnum from '@/Sections/Cabin/Cabinnum'
import Footer from '@/Sections/Footer/Footer'
import App from '@/Sections/Footer/Footer'
import Golden from '@/Sections/golden/Golden'
import Hero from '@/Sections/Hero/Hero'
import Hero2 from '@/Sections/Hero2/Hero2'
import Hero3 from '@/Sections/Hero3/Hero3'
import Navbar from '@/Sections/Navbar/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        {/* <Cabinnum/> */}
        {/* <App/> */}
  
        <Golden/>
        <Footer/>
    </div>
  )
}

export default Home