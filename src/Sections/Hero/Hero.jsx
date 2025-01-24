import React from 'react'
import './Hero.css'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  
  return (
    <div className='glow'> 
        <div className='con'>
            <h1>One-Stop Solution  <br /> for Your Career</h1>
            <p>Master DSA and Development. <br /> Unlock opportunities. Build your future.</p>
            <p className='gold'>By Golden Opportunities</p>
               <a href="#down"><button className='btn'>Get started</button></a> 
        </div>
    </div>
  )
}

export default Hero