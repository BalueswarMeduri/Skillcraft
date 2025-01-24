import React from 'react'
import './Hero3.css'
import { Link } from 'react-router-dom'

const Hero3 = () => {
  return (
    <div>
        <div className='hero3'>
            <h1>Start practicing Development</h1>
            <p>We have most important and previously asked questions <br /> from top companies to master it with dedication and perseverance.</p>
            <Link to="/Dev"><button className='btn herobtn'>DEV</button></Link>
        </div>
    </div>
  )
}

export default Hero3