// MthezasKitchen/src/components/ConfirmationPage.js
import React from 'react';

const ConfirmationPage = ({ returnToLanding }) => (
  <div>
    <h2>Order Confirmation</h2>
    {/* Display order details */}
    <p>Thank you for your order!</p>
    <button onClick={returnToLanding}>Back to Landing Page</button>
  </div>
);

export default ConfirmationPage;
