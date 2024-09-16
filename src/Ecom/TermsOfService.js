import React from 'react';
import './Style/TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <h1>Terms of Service</h1>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Introduction</h2>
        <p className="terms-of-service-description">
          Welcome to our website. By using our services, you agree to comply with and be bound by these terms of service.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Use of Our Services</h2>
        <p className="terms-of-service-description">
          You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for any content you post or transmit through our services.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">User Accounts</h2>
        <p className="terms-of-service-description">
          You may need to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Intellectual Property</h2>
        <p className="terms-of-service-description">
          All content and materials on our website are the property of our company or our licensors and are protected by copyright and intellectual property laws.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Limitation of Liability</h2>
        <p className="terms-of-service-description">
          Our liability is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Changes to These Terms</h2>
        <p className="terms-of-service-description">
          We may update these terms of service from time to time. We will notify you of any changes by posting the new terms on our website.
        </p>
      </div>
      <div className="terms-of-service-section">
        <h2 className="terms-of-service-heading">Contact Us</h2>
        <p className="terms-of-service-description">
          If you have any questions about these terms, please contact us at support@example.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;