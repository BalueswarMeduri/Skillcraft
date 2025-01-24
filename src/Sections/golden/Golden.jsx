import React from 'react'
import './Golden.css'
import { Link } from 'react-router-dom'
const Golden = () => {
  return (
    <div>
        <div className='golden'>
            <h1>✨ Golden Opportunities Channel ✨</h1>
            <p>➡️Daily DSA Quizzes – Boost your problem-solving skills! ⬅️ <br />
            ➡️Internships & Resources – Stay ahead with the best career opportunities.⬅️ <br />
            ➡️Hackathons Alerts – Showcase your talent and win big!⬅️ <br />
            ➡️Daily LeetCode Problems – Master coding with optimal solutions.⬅️</p>
            <a href="https://whatsapp.com/channel/0029VayCXrsDTkK9M5LRc91E"><button className='btn'>Follow The Channel</button></a>
            <br />
            <Link to="/Contact"><button className='btn'>Contact</button></Link>
        </div>
    </div>
  )
}

export default Golden