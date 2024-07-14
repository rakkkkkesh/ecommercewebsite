import React from 'react';
import './Style/Contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
