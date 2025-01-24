import Navbar from '@/Sections/Navbar/Navbar';
import React from 'react';
import './About.css'; // Importing the CSS file

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-text">
          Welcome to our platform! We are dedicated to empowering individuals to excel in coding, 
          development, and problem-solving. Our mission is to provide top-notch resources, structured 
          learning paths, and real-world projects to help you master Data Structures and Algorithms (DSA) 
          and full-stack development.
        </p>
        <p className="about-text">
          With a focus on practical knowledge and hands-on experience, we offer topic-wise guides, 
          curated resources, and insights into the most commonly asked questions from top companies. 
          Whether you're preparing for technical interviews or enhancing your development skills, 
          we're here to support your journey every step of the way.
        </p>
        <p className="about-text">
          Join us and take your skills to the next level with our comprehensive learning approach and 
          community support!
        </p>
      </div>
    </div>
  );
};

export default About;
