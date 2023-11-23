// src/components/StoreSelectionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StoreSelectionPage = ({ placeOrder }) => {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState('');
  const [menu, setMenu] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleContinue = () => {
    // Redirect to the landing page with selected items
    placeOrder(selectedStore, selectedItems);
    navigate('/');
  };

  const handleStoreChange = (e) => {
    const store = e.target.value;
    setSelectedStore(store);

    // Fetch menu for the selected store (mock data for demonstration)
    const mockMenu = getMockMenu(store);
    setMenu(mockMenu);
  };

  const handleAddItem = () => {
    if (itemName && itemPrice) {
      const newItem = { name: itemName, price: itemPrice };
      setSelectedItems([...selectedItems, newItem]);
      setItemName('');
      setItemPrice('');
    }
  };

  const getMockMenu = (store) => {
    // Mock menu data for each store
    const menus = {
      mdantsane: [
        { id: 1, name: 'Burger', price: 50 },
        { id: 2, name: 'Pizza', price: 80 },
        { id: 3, name: 'Salad', price: 30 },
      ],
      vincent: [
        { id: 4, name: 'Sushi', price: 100 },
        { id: 5, name: 'Steak', price: 120 },
        { id: 6, name: 'Pasta', price: 60 },
      ],
      southernwood: [
        { id: 7, name: 'Sandwich', price: 40 },
        { id: 8, name: 'Soup', price: 25 },
        { id: 9, name: 'Dessert', price: 15 },
      ],
    };

    return menus[store] || [];
  };

  return (
    <div>
      <h2>Select Store</h2>
      <select onChange={handleStoreChange}>
        <option value="">Select a Store</option>
        <option value="mdantsane">Mdantsane Menu</option>
        <option value="vincent">Vincent Menu</option>
        <option value="southernwood">Southern Wood Menu</option>
      </select>

      {/* Render menu for the selected store */}
      {menu.length > 0 && (
        <div>
          <h3>Menu for {selectedStore}:</h3>
          <ul>
            {menu.map((item) => (
              <li key={item.id}>
                {item.name} - R{item.price}
              </li>
            ))}
          </ul>

          {/* Add item input fields */}
          <div>
            <label>
              Item Name:
              <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            </label>
            <label>
              Item Price:
              <input type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
            </label>
            <button onClick={handleAddItem}>Add Item</button>
          </div>

          {/* Display selected items */}
          {selectedItems.length > 0 && (
            <div>
              <h3>Selected Items:</h3>
              <ul>
                {selectedItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - R{item.price}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Continue button */}
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default StoreSelectionPage;
