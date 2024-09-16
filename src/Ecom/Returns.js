import React from 'react';
import './Style/Returns.css';

const Returns = () => {
  return (
    <div className="returns-container">
      <h1>Returns and Exchanges</h1>
      <div className="returns-section">
        <h2 className="returns-heading">Return Policy</h2>
        <p className="returns-description">
          We offer a 30-day return policy for most items. To qualify for a return, the items must be unused, in their original packaging, and with all original tags attached.
        </p>
      </div>
      <div className="returns-section">
        <h2 className="returns-heading">How to Return an Item</h2>
        <p className="returns-description">
          To return an item, please follow these steps:
          <ol>
            <li>Contact our customer service team to initiate the return.</li>
            <li>Pack the item securely in its original packaging.</li>
            <li>Ship the package to the return address provided by our customer service team.</li>
          </ol>
        </p>
      </div>
      <div className="returns-section">
        <h2 className="returns-heading">Exchange Policy</h2>
        <p className="returns-description">
          If you would like to exchange an item, please contact our customer service team. Exchanges are subject to product availability and must be initiated within 30 days of receipt.
        </p>
      </div>
      <div className="returns-section">
        <h2 className="returns-heading">Refund Process</h2>
        <p className="returns-description">
          Once we receive and inspect your return, we will process your refund. Refunds will be issued to the original payment method and typically take 5-7 business days to appear in your account.
        </p>
      </div>
    </div>
  );
};

export default Returns;