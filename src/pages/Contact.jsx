import React, { useState } from "react";
import "./About.css";
import Navbar from "@/Sections/Navbar/Navbar";

export default function Contact() {
  const [result, setResult] = useState(""); // For submission status
  const [formSubmitted, setFormSubmitted] = useState(false); // To toggle between form and success message

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a4279acb-45f6-4f39-860c-6a181f2f2101");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(""); // Clear result message
        setFormSubmitted(true); // Show success message
        event.target.reset(); // Clear the form fields

        // Show the form again after 3 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <div>
        <Navbar/>
    <div className="contact-container">
      <h1>Golden Opportunities</h1>
      <h2>Contact Us</h2>
      {!formSubmitted ? (
        <form onSubmit={onSubmit} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit">Submit Form</button>
          <span>{result}</span>
        </form>
      ) : (
        <div className="success-message">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/392/600/small/message-has-been-sent-successfully-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            alt="Success"
            className="success-image"
          />
          <p>Form Submitted Successfully!</p>
          <p className="than">Thank you</p>
        </div>
      )}
    </div>
    </div>
  );
}
