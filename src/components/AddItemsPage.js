// src/components/AddItemsPage.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddItemsPage = () => {
  const navigate = useNavigate();
  const { selectedStore } = useParams();
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    // Logic to add an item
    const newItem = {
      // You can customize the structure based on your needs
      name: 'New Item',
      price: '0.00',
    };

    setItems([...items, newItem]);
  };

  const handleContinue = () => {
    // Logic to continue to the next page (e.g., payment page)
    navigate('/payment');
  };

  return (
    <div>
      <h2>Add Items</h2>
      <p>Selected Store: {selectedStore}</p>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default AddItemsPage;
