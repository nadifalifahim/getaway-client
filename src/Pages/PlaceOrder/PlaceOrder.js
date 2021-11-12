import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="place-order-container">
        <div>
          <h1 className="section-title">Billing Details</h1>
          <form>
            <label>Full Name</label>
            <input type="text" required value={user.displayName}></input>
            <label>Email Address</label>
            <input type="email" required value={user.email}></input>
            <input
              type="password"
              required
              placeholder="Enter your password"
            ></input>
            <button type="submit" className="primary-button">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
