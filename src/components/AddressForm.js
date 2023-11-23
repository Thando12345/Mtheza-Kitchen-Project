// MthezasKitchen/src/components/AddressForm.js
import React from 'react';

const AddressForm = ({ submitOrder, returnToLanding }) => (
  <div>
    <h2>Add Delivery Address</h2>
    <form>
      {/* Add address fields */}
      <button type="button" onClick={submitOrder}>Submit Order</button>
    </form>
    <button onClick={returnToLanding}>Cancel Order</button>
  </div>
);

export default AddressForm;
