// client/src/utils/api.js
const API_BASE_URL = 'http://localhost:5000/api'; // Update with your server URL

export const placeOrder = (data) => {
  return fetch(`${API_BASE_URL}/orders/place-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const sendWhatsappNotification = (data) => {
  return fetch(`${API_BASE_URL}/notifications/send-whatsapp-notification`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
