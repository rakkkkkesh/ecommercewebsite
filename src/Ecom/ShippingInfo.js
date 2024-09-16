import React from 'react';
import './Style/ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <div className="shipping-info-container">
      <h1>Shipping Information</h1>
      <div className="shipping-info-section">
        <h2 className="shipping-info-heading">Shipping Methods</h2>
        <p className="shipping-info-description">
          We offer a variety of shipping methods to meet your needs, including standard, expedited, and overnight shipping. Choose the method that best suits your delivery timeline.
        </p>
      </div>
      <div className="shipping-info-section">
        <h2 className="shipping-info-heading">Shipping Costs</h2>
        <p className="shipping-info-description">
          Shipping costs are calculated based on the weight of your order and your delivery location. You will see the shipping cost at checkout before you confirm your order.
        </p>
      </div>
      <div className="shipping-info-section">
        <h2 className="shipping-info-heading">Order Processing Time</h2>
        <p className="shipping-info-description">
          Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
        </p>
      </div>
      <div className="shipping-info-section">
        <h2 className="shipping-info-heading">Delivery Time</h2>
        <p className="shipping-info-description">
          Delivery times vary based on your shipping method and location. Standard shipping typically takes 5-7 business days, expedited shipping 2-3 business days, and overnight shipping 1 business day.
        </p>
      </div>
    </div>
  );
};

export default ShippingInfo;