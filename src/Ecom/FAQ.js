import React from 'react';
import './Style/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        <h2 className="faq-question">What is your return policy?</h2>
        <p className="faq-answer">
          We offer a 30-day return policy on most items. Please ensure items are in their original packaging and condition.
        </p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">How can I track my order?</h2>
        <p className="faq-answer">
          Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website.
        </p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">Do you offer international shipping?</h2>
        <p className="faq-answer">
          Yes, we do offer international shipping. Shipping costs and times will vary based on your location.
        </p>
      </div>
      <div className="faq-section">
        <h2 className="faq-question">How can I contact customer service?</h2>
        <p className="faq-answer">
          You can reach our customer service team via email at support@example.com or by phone at 1-800-123-4567.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
