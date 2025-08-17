// src/components/OrderTrackingPage.tsx

import React, { useState, useEffect } from 'react';
import './OrderTrackingPage.css'; // Optional: for styling

// Define the shape of your data
interface OrderStatus {
  status: string;
  timestamp: string;
}

interface OrderDetails {
  orderId: string;
  trackingNumber: string;
  currentStatus: string;
  estimatedDelivery: string;
  statusHistory: OrderStatus[];
}

const OrderTrackingPage: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This function will fetch the order data from your API
    const fetchOrderData = async () => {
      try {
        // Replace this with your actual API endpoint and logic
        // For now, we'll use a mock API call
        const mockResponse: OrderDetails = {
          orderId: 'ORD12345',
          trackingNumber: 'TRK67890',
          currentStatus: 'Out for Delivery',
          estimatedDelivery: 'August 20, 2025',
          statusHistory: [
            { status: 'Order Placed', timestamp: '2025-08-17T10:00:00Z' },
            { status: 'Processed', timestamp: '2025-08-17T12:30:00Z' },
            { status: 'Shipped', timestamp: '2025-08-18T09:00:00Z' },
            { status: 'Out for Delivery', timestamp: '2025-08-20T08:00:00Z' },
          ],
        };

        // Simulate a network delay
        setTimeout(() => {
          setOrderDetails(mockResponse);
          setLoading(false);
        }, 1500);

      } catch (err) {
        console.error("Failed to fetch order details:", err);
        setError("Could not fetch order details. Please try again.");
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (!orderDetails) {
    return <div>No order details found.</div>;
  }

  // --- UI Rendering ---
  return (
    <div className="order-tracking-container">
      <h1>Track Your Order</h1>
      <div className="order-summary">
        <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
        <p><strong>Tracking Number:</strong> {orderDetails.trackingNumber}</p>
        <p><strong>Current Status:</strong> {orderDetails.currentStatus}</p>
        <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
      </div>

      <div className="status-timeline">
        <h2>Order History</h2>
        <ul>
          {orderDetails.statusHistory.map((historyItem, index) => (
            <li key={index} className="status-item">
              <span className="status-dot"></span>
              <div className="status-content">
                <p className="status-text">{historyItem.status}</p>
                <p className="status-date">{new Date(historyItem.timestamp).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
