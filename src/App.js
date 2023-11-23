// src/App.js
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import CheckoutPage from './components/CheckoutPage';
import AddressForm from './components/AddressForm';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  const [page, setPage] = useState('landing');
  const [selectedStore, setSelectedStore] = useState(null);

  const placeOrder = (store) => {
    setSelectedStore(store);
    setPage('menu');
  };

  const continueToCheckout = () => {
    setPage('checkout');
  };

  const submitOrder = () => {
    setPage('confirmation');
  };

  const returnToLanding = () => {
    setPage('landing');
  };

  return (
    <div className="App">
      {page === 'landing' && <LandingPage placeOrder={placeOrder} />}
      {page === 'menu' && <MenuPage selectedStore={selectedStore} returnToLanding={returnToLanding} />}
      {page === 'checkout' && <CheckoutPage continueToCheckout={continueToCheckout} returnToLanding={returnToLanding} />}
      {page === 'addressForm' && <AddressForm submitOrder={submitOrder} returnToLanding={returnToLanding} />}
      {page === 'confirmation' && <ConfirmationPage returnToLanding={returnToLanding} />}
    </div>
  );
}

export default App;
