// MthezasKitchen/src/components/CheckoutPage.js
import React from 'react';

const CheckoutPage = ({ continueToCheckout, returnToLanding }) => (
  <div>
    <h2>Checkout</h2>
    <form>
      {/* Add payment options */}
      <button type="button" onClick={continueToCheckout}>Continue</button>
    </form>
    <button onClick={returnToLanding}>Cancel Order</button>
  </div>
);

export default CheckoutPage;
