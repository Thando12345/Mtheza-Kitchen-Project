// MthezasKitchen/src/components/MenuPage.js
import React from 'react';

const MenuPage = ({ selectedStore, returnToLanding }) => (
  <div>
    <h2>{selectedStore} Store Menu</h2>
    {/* Add menu items here */}
    <button onClick={returnToLanding}>Back to Landing Page</button>
  </div>
);

export default MenuPage;
