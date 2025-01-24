import React from 'react'
import { Link } from 'react-router-dom'

const Cabinnum = () => {
  return (
    <div>
        <div className='hero2'>
            <h1>Cabin Finder</h1>
            <p>Easily locate your assigned cabin number for a smooth and hassle-free experience!</p>
            <Link to="/Cabin"><button className='btn herobtn'>Cabin</button></Link>
        </div>
    </div>
  )
}

export default Cabinnum