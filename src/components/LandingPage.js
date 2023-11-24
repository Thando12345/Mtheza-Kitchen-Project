import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';
import StoreSelectionPage from './StoreSelectionPage';

const LandingPage = ({ placeOrder }) => {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState('');
  const [userSession, setUserSession] = useState(null);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });
  const [foodImages, setFoodImages] = useState(initialFoodImages);

  const generateSessionId = () => {
    return Math.random().toString(36).substring(7);
  };

  const handlePlaceOrder = () => {
    navigate('/store-selection');
  };

  const handleContinueToCheckout = () => {
    if (paymentOption === 'PayOnDelivery') {
      setShowDeliveryForm(true);
    } else {
      axios
        .post('/api/orders/place-order', {
          selectedStore,
          sessionId: generateSessionId(),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleAddDeliveryAddress = () => {
    axios
      .post('/api/notifications/send-notification', {
        name: deliveryAddress.name,
        address: deliveryAddress.address,
        phoneNumber: deliveryAddress.phoneNumber,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    handleContinueToCheckout();
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleZoom = (zoomType, imageId) => {
    const zoomFactor = zoomType === 'in' ? 0.1 : -0.1;
    const updatedFoodImages = foodImages.map((image) =>
      image.id === imageId
        ? { ...image, zoomLevel: (image.zoomLevel || 1) + zoomFactor }
        : image
    );

    setFoodImages(updatedFoodImages);
  };

  const renderFoodImages = () => {
    return foodImages.map((image) => (
      <div key={image.id} className="food-image-container">
        <img
          src={image.url}
          alt={`Food ${image.id}`}
          className="food-image"
          onClick={() => handleClick(image.id)}
          style={{ transform: `scale(${image.zoomLevel || 1})` }}
        />
        <div className="image-overlay">
          <p>{image.description}</p>
          <p>{image.price}</p>
        </div>
        <div className="zoom-buttons">
          <button onClick={() => handleZoom('in', image.id)}>+</button>
          <button onClick={() => handleZoom('out', image.id)}>-</button>
        </div>
      </div>
    ));
  };

  const handleClick = (imageId) => {
    const selectedImage = foodImages.find((image) => image.id === imageId);
    console.log(
      `Clicked on image ${imageId}: ${selectedImage.description}, Price: ${selectedImage.price}`
    );
  };

  return (
    <div>
      <h1>Mthezas Kitchen</h1>
      {userSession ? (
        <div>
          <p>Welcome, {userSession.username}!</p>
          <button onClick={() => setUserSession(null)}>Logout</button>
        </div>
      ) : (
        <button onClick={() => setUserSession({ username: 'Thando Nogemanene' })}>Login</button>
      )}
      <button onClick={handlePlaceOrder}>Place Order</button>
      {selectedStore && (
        <select onChange={(e) => setSelectedStore(e.target.value)}>
          <option value="mdantsane">Mdantsane Menu</option>
          <option value="vincent">Vincent Menu</option>
          <option value="southernwood">Southern Wood Menu</option>
        </select>
      )}

      {/* Render food images */}
      <div className="food-images-container">{renderFoodImages()}</div>

      {/* Payment Options */}
      <form>
        <input
          type="radio"
          name="paymentOption"
          value="PayOnDelivery"
          onChange={handlePaymentOptionChange}
        />
        Pay on Delivery
        <input
          type="radio"
          name="paymentOption"
          value="Transfer"
          onChange={handlePaymentOptionChange}
        />
        Transfer

        {showDeliveryForm && (
          <div>
            {/* Delivery Form */}
            <label>
              Name:
              <input
                type="text"
                value={deliveryAddress.name}
                onChange={(e) =>
                  setDeliveryAddress({ ...deliveryAddress, name: e.target.value })
                }
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={deliveryAddress.address}
                onChange={(e) =>
                  setDeliveryAddress({ ...deliveryAddress, address: e.target.value })
                }
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                value={deliveryAddress.phoneNumber}
                onChange={(e) =>
                  setDeliveryAddress({
                    ...deliveryAddress,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </label>
            <button type="button" onClick={handleAddDeliveryAddress}>
              Add Delivery Address
            </button>
          </div>
        )}

        {/* Continue to Checkout Button */}
        <button type="button" onClick={handleContinueToCheckout}>
          Continue to Checkout
        </button>
      </form>

      {/* Include the StoreSelectionPage component */}
      <StoreSelectionPage />
    </div>
  );
};

const initialFoodImages = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  url: `/images/food${index + 1}.jpeg`,
  description: `Description ${index + 1}`,
  price: `$${(index + 1) * 5}`, // Replace with actual pricing logic
}));

export default LandingPage;
