import React from 'react';
import './Style/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">Introduction</h2>
        <p className="privacy-policy-description">
          We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">Information We Collect</h2>
        <p className="privacy-policy-description">
          We collect information you provide directly to us, such as your name, email address, and payment details. We also collect information automatically through cookies and other tracking technologies.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">How We Use Your Information</h2>
        <p className="privacy-policy-description">
          We use your information to process transactions, improve our services, and communicate with you. We may also use your data for marketing purposes with your consent.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">Data Security</h2>
        <p className="privacy-policy-description">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">Your Rights</h2>
        <p className="privacy-policy-description">
          You have the right to access, correct, or delete your personal information. If you have any concerns or requests regarding your data, please contact us.
        </p>
      </div>
      <div className="privacy-policy-section">
        <h2 className="privacy-policy-heading">Changes to This Policy</h2>
        <p className="privacy-policy-description">
          We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;