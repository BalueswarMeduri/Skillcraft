import AIML from '@/Sections/Dev/AIML'
import CyberSecurity from '@/Sections/Dev/CyberSecurity'
import DataScience from '@/Sections/Dev/DataScience'
import WebDev from '@/Sections/Dev/WebDev'
import Footer from '@/Sections/Footer/Footer'
import App from '@/Sections/Footer/Footer'
import Navbar from '@/Sections/Navbar/Navbar'
import React from 'react'

const Dev = () => {
  return (
    <div>
      <Navbar/>
      <WebDev/>
      <AIML/>
      <CyberSecurity/>
      <DataScience/>
      <App/>
    </div>
  )
}

export default Dev